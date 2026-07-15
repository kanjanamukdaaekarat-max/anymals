# Anymals

แพลตฟอร์มความรู้และชุมชนสำหรับผู้เลี้ยงสัตว์ Exotic พัฒนาแบบ production-ready ด้วย React, Vite, TypeScript, Tailwind CSS, shadcn/ui conventions และ Supabase

## เริ่มต้นใช้งาน

```bash
pnpm install
copy .env.example .env.local
pnpm dev
```

กรอก `VITE_SUPABASE_URL` และ `VITE_SUPABASE_PUBLISHABLE_KEY` ใน `.env.local` เท่านั้น ห้ามใส่ secret/service-role key ใน frontend

## โครงสร้าง

- `src/app` — routing และ application composition
- `src/features` — โมดูล Home, Species, Articles, Community, Auth, Profile, Admin
- `src/components/ui` — shadcn/ui primitives
- `src/components` — reusable domain components
- `src/layouts` — application layouts
- `src/services`, `src/lib`, `src/types` — data, integrations และ shared contracts
- `supabase/migrations` — schema, indexes, triggers, grants, RLS และ Storage policies
- `supabase/seed.sql` — หมวดหมู่และข้อมูลตัวอย่าง

UI มี fallback data จึงเปิดดูได้แม้ยังไม่ได้เชื่อม Supabase ส่วนการเขียน/แก้ไขข้อมูลจริงต้องใส่ environment variables และ apply migration ก่อน

## คำสั่งตรวจสอบ

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm format
```

## Supabase

1. สร้าง Supabase project ภายใต้ owner `kanjanamukdaaekarat-max`
2. Apply `supabase/migrations/20260715000000_initial_schema.sql`
3. Apply `supabase/seed.sql`
4. ตั้ง Site URL และ redirect URLs สำหรับ localhost และ Vercel
5. สร้าง admin คนแรกโดยแก้ `profiles.role` ผ่าน SQL Editor ที่เชื่อถือได้

ทุกตารางใน exposed schema เปิด RLS แล้ว สิทธิ์ admin อ่านจาก `profiles.role` ซึ่งผู้ใช้แก้เองไม่ได้ และ bucket `media` จำกัดชนิด/ขนาดไฟล์พร้อมบังคับ path ของเจ้าของ

## GitHub

Repository ถูกเตรียมสำหรับบัญชี `kanjanamukdaaekarat-max`:

```bash
git remote add origin https://github.com/kanjanamukdaaekarat-max/anymals.git
git push -u origin main
```

คำสั่งด้านบนต้องใช้หลังสร้าง repository บน GitHub และ authenticate แล้ว

## Vercel

Import GitHub repository ในบัญชี `kanjanamukdaaekarat-max`, เลือก Vite preset, ตั้ง Build Command เป็น `pnpm build`, Output เป็น `dist` และเพิ่ม environment variables ทั้งสองตัว `vercel.json` รองรับ React Router SPA rewrite แล้ว

## SEO และการขยายระบบ

มี semantic HTML, meta description และ route structure ที่อ่านง่าย พร้อมรองรับการเพิ่ม React Helmet/SSR/prerender ในระยะถัดไป หากต้องการ SEO สำหรับ species/article ทุกหน้าระดับ search indexing แบบเต็ม ควรย้าย public content routes ไปยัง framework ที่รองรับ SSR หรือเพิ่ม prerender pipeline
