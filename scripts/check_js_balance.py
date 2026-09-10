# -*- coding: utf-8 -*-
import re, sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open(r"D:\Song_Anh\songanh-sale\index.html", "r", encoding="utf-8") as f:
    content = f.read()

# Check open/close tags
scripts = re.findall(r"<script>([\s\S]*?)</script>", content)
print(f"Found {len(scripts)} script block(s)")
if scripts:
    js = scripts[0]
    # check matching braces
    stack = []
    lines = js.split("\n")
    for line_idx, line in enumerate(lines, 1):
        for char_idx, ch in enumerate(line, 1):
            if ch in "{[(":
                stack.append((ch, line_idx, char_idx))
            elif ch in "}])":
                if not stack:
                    print(f"❌ Unmatched closing '{ch}' at line {line_idx}:{char_idx}")
                    sys.exit(1)
                last_ch, l, c = stack.pop()
                matching = {'{': '}', '[': ']', '(': ')'}
                if matching[last_ch] != ch:
                    print(f"❌ Mismatched '{last_ch}' from line {l}:{c} with '{ch}' at line {line_idx}:{char_idx}")
                    # note: strings with regex or template literals might contain braces, but let's check
    print(f"Remaining unmatched on stack: {len(stack)}")
    if not stack:
        print("✅ Brackets/braces perfectly balanced!")

print("✅ Script validation finished.")
