# -*- coding: utf-8 -*-
import shutil, os, sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

src = r"D:\Song_Anh\songanh-sale\index.html"
targets = [
    r"D:\Song_Anh\songanh-sale\App_Sale_Song_Anh.html",
    r"d:\Song_Anh\01_Mo_Hinh_Kien_Truc\Project_Assets\App_Sale_Song_Anh.html",
    r"G:\My Drive\AI Agent System\AG_Tool_May_Lap_Steven\Sale Manager Agent\App_Sale_Song_Anh.html"
]

src_size = os.path.getsize(src)
print(f"Source: {src} ({src_size} bytes)")

for t in targets:
    os.makedirs(os.path.dirname(t), exist_ok=True)
    shutil.copy2(src, t)
    t_size = os.path.getsize(t)
    print(f"✅ Synced -> {t} ({t_size} bytes)")

print("🎉 All 3 mirror files synced perfectly!")
