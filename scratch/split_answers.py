"""
Split interview answers into 2-4 readable paragraphs.
Writes \n\n as literal escape sequence in the TypeScript source.
"""
import re

# --- Splitting logic ---

# Transition phrases that signal a natural paragraph break in conceptual answers
BREAK_PATTERN = re.compile(
    r'(?<=[.!?]) '
    r'(?='
    r'In 2026'
    r'|In practice'
    r'|Practically[, ]'
    r'|The risk '
    r'|The risks '
    r'|The limitation'
    r'|The tradeoff'
    r'|The trade-off'
    r'|Unlike '
    r'|However,'
    r'|That said'
    r'|For example,'
    r'|The key '
    r'|The most '
    r'|The three '
    r'|The four '
    r'|The five '
    r'|Three '
    r'|Four '
    r'|Five '
    r'|Research from'
    r'|Studies show'
    r'|Tools like'
    r'|A brand '
    r'|A mature '
    r'|A strong '
    r'|As of 2026'
    r'|Measuring '
    r'|Tracking '
    r'|Beyond '
    r'|Building '
    r'|This shifts'
    r'|This is why'
    r'|This means '
    r'|This became'
    r'|This requires'
    r'|This approach'
    r'|This creates'
    r'|The practical'
    r'|The direct '
    r'|The discipline'
    r'|The distinction'
    r'|The cleanest'
    r'|The clearest'
    r'|The honest'
    r'|The problem'
    r'|The challenge'
    r'|The formula'
    r'|The mechanism'
    r'|The most common'
    r'|The most important'
    r'|Most marketing'
    r'|Most candidates'
    r'|Most brands'
    r'|Most programs'
    r'|Most companies'
    r'|Ethical '
    r'|Attribution '
    r'|Incrementality '
    r'|Qualitative '
    r'|Quantitative '
    r')'
)


def merge_to_limit(parts, max_parts=4):
    """Merge shortest adjacent pairs until we have at most max_parts."""
    while len(parts) > max_parts:
        idx = min(range(len(parts) - 1),
                  key=lambda i: len(parts[i]) + len(parts[i + 1]))
        parts[idx] = parts[idx] + ' ' + parts[idx + 1]
        del parts[idx + 1]
    return parts


def split_by_sentences(text, target=2):
    """Fallback: split into target groups by sentence count."""
    sentences = re.split(r'(?<=[.!?]) (?=[A-Z"\'\(])', text)
    n = len(sentences)
    if n < 3:
        return [text]
    if target == 3 and n >= 5:
        c1, c2 = n // 3, 2 * n // 3
        return [
            ' '.join(sentences[:c1]),
            ' '.join(sentences[c1:c2]),
            ' '.join(sentences[c2:]),
        ]
    mid = max(2, n // 2)
    return [
        ' '.join(sentences[:mid]),
        ' '.join(sentences[mid:]),
    ]


def split_conceptual(text):
    parts = BREAK_PATTERN.split(text)
    parts = [p.strip() for p in parts if p.strip()]

    if len(parts) < 2:
        # Fallback to sentence-based split
        parts = split_by_sentences(text, target=2)

    parts = merge_to_limit(parts, max_parts=4)
    return parts


def split_scenario(text):
    """Split on Problem / Approach / Result keywords."""
    parts = re.split(r'(?<=[.!?]) (?=(?:Problem:|Approach:|Result:))', text)
    parts = [p.strip() for p in parts if p.strip()]
    if len(parts) >= 2:
        return merge_to_limit(parts, max_parts=4)
    # Fallback
    return split_conceptual(text)


def split_answer(text):
    if 'Approach:' in text and 'Result:' in text:
        return split_scenario(text)
    return split_conceptual(text)


# --- Process the file ---

content = open('src/lib/interview-questions.ts', encoding='utf-8').read()

split_count = 0
skip_count = 0


def replace_answer(m):
    global split_count, skip_count
    original = m.group(1)
    parts = split_answer(original)
    if len(parts) <= 1:
        skip_count += 1
        return m.group(0)
    new_text = r'\n\n'.join(parts)  # literal \n\n in the TS source
    split_count += 1
    return f'        a: "{new_text}",'


result = re.sub(r'        a: "([^"]+)",', replace_answer, content)
open('src/lib/interview-questions.ts', 'w', encoding='utf-8').write(result)

print(f'Split: {split_count} answers | Skipped (already short): {skip_count}')

# Quick sanity check
new_content = open('src/lib/interview-questions.ts', encoding='utf-8').read()
with_breaks = new_content.count(r'\n\n')
print(f'Literal \\n\\n sequences in file: {with_breaks}')
