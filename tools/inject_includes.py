#!/usr/bin/env python3
"""
FDC Include Injector
====================
Edit assets/includes/ann-bar.html, header.html or footer.html
then run this script to push the change to all HTML pages.

Usage:
  python3 tools/inject_includes.py

Run from the repo root folder.
"""
import os, re

ROOT     = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INCLUDES = os.path.join(ROOT, "assets", "includes")

def read(path):
    with open(path) as f: return f.read()

# Load the three include files (strip the comment line at top)
def load_include(name):
    content = read(os.path.join(INCLUDES, name))
    # Remove the comment header lines
    lines = content.split("\n")
    lines = [l for l in lines if not l.strip().startswith("<!--")]
    return "\n".join(lines).strip()

ANN  = load_include("ann-bar.html")
HEAD = load_include("header.html")
FOOT = load_include("footer.html")

updated = []
for fname in sorted(os.listdir(ROOT)):
    if not fname.endswith(".html"):
        continue
    path = os.path.join(ROOT, fname)
    with open(path) as f: html = f.read()
    original = html

    # Replace announcement bar
    html = re.sub(
        r'<div class="ann-bar"[^>]*>.*?</div>',
        ANN, html, count=1, flags=re.DOTALL
    )
    # Replace header
    html = re.sub(
        r'<header\b[^>]*>.*?</header>',
        HEAD, html, count=1, flags=re.DOTALL
    )
    # Replace footer
    html = re.sub(
        r'<footer\b[^>]*>.*?</footer>',
        FOOT, html, count=1, flags=re.DOTALL
    )

    if html != original:
        with open(path, "w") as f: f.write(html)
        updated.append(fname)
        print(f"  ✓ {fname}")

print(f"\nDone. {len(updated)} files updated.")
print("\nNext steps:")
print("  git add *.html")
print("  git commit -m \'Update shared header/footer/ann-bar\'")
print("  git push origin main")
