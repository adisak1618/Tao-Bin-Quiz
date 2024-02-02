# Tao Bin Quiz

ผมตัดสินใจใช้ Apollo Server สำหรับข้อมูล mockup แทนที่จะใช้ JSON-SERVER ตามที่แนะนำใน Docs. ส่วนตัวคิดว่าการทำงานกับ GraphQL API นั้นง่ายกว่าและทำให้การพัฒนาฝั่ง frontend ง่ายขึ้นมาก จากการคุยทางโทรศัพท์ที่ผ่านมา ผมเข้าใจว่าทีมกำลังใช้ GraphQL API อยู่แล้ว สำหรับ UI ฉันใช้ Tailwind CSS และ Shadcn เป็นหลัก แต่ไม่ได้ใช้เวลามากนักในการออกแบบ ผมมีความสนใจในการออกแบบอยู่บ้างแต่ยังอยู่ในช่วงพัฒนา ดังนั้นฉันจึงเน้นไปที่การทำให้มีฟีเจอร์ที่ครบถ้วนเป็นหลัก

## Tecnology use

- **TurboRepo**: เนื่องจากโปรเจกต์นี้มีทั้ง frontend และ backend จึงตัดสินใจใช้ Monorepo
- **Next.js**: ใช้สำหรับเขียน React และจัดการเรื่องการ route
- **React Hook Form**: สำหรับจัดการฟอร์ม
- **Next Auth**: สำหรับการจัดการ Authentication อย่างมีประสิทธิภาพ
- **Zod**: ใช้สำหรับการ Validate ฟอร์ม และใช้เป็น type guard สำหรับ Rest API ที่ไม่มี type safety เหมือนกับ GraphQL API
- **Framer Motion**: สำหรับการทำ animation
- **TypeScript**
- **Tailwind CSS**: สำหรับการเขียน style
- **CLSX**: สำหรับจัดการเงื่อนไขของ style
- **Apollo Client**: สำหรับจัดการ State ของ GraphQL
- **Apollo Server**: ใช้สำหรับ Mock Data เพื่อใช้ในหน้า admin
- **GraphQL Codegen**: ช่วยสร้างโค้ด TypeScript จาก Schema ของ GraphQL
- **shadcn/ui**: คือ UI Library ที่เบาและทำให้สามารถ customize ได้อย่างอิสระ

## Setup Project
Run the following command for install on the root of the project:

```sh
pnpm install
```

Start Server and Website by run following command:

```sh
pnpm dev
```

