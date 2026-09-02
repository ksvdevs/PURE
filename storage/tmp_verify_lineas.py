import re

raw = open('content/collections/pages/lineas-de-investigacion.md', encoding='utf-8').read()
assert raw.startswith('---\n'), 'no front matter'
fm = raw.split('---\n', 2)[1]

try:
    import yaml
    data = yaml.safe_load(fm)
    print('YAML OK; claves:', list(data.keys()))
    code = data['block_types'][0]['template']['code']
except ImportError:
    print('pyyaml no disponible; extrayendo bloque manualmente')
    code = raw.split('code: |-', 1)[1].rsplit('mode:', 1)[0]

print('ocurrencias de {{ :', code.count('{{'))

void = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
stack = []
errors = []
for m in re.finditer(r'<(/?)([a-zA-Z][a-zA-Z0-9]*)(\s[^<>]*)?(/?)>', code):
    closing, tag, selfclose = m.group(1), m.group(2).lower(), m.group(4)
    if tag in void or selfclose:
        continue
    if closing:
        if not stack or stack[-1] != tag:
            errors.append('mismatch: </%s> tope=%s' % (tag, stack[-1] if stack else None))
        else:
            stack.pop()
    else:
        stack.append(tag)
print('errores:', errors if errors else 'ninguno')
print('sin cerrar:', stack if stack else 'ninguno')
print('toggleAccordion(this):', code.count('toggleAccordion(this)'))
print('aria-expanded:', code.count('aria-expanded'))
print('botones tab:', len(re.findall(r'class="lineas-tab-btn', code)))
print('accordion-header:', code.count('accordion-header'))
