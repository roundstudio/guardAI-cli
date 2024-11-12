// models.ts
export interface ObjectType {
    id: number; // شناسه یکتا
    name: string; // نام نوع شیء
}

export interface UserObjectRequest {
    id: number; // شناسه یکتا
    name: string; // نام کاربر
    objectTypes: ObjectType[]; // آرایه‌ای از نوع‌های شیء
    description?: string; // توضیحات (اختیاری)
    timestamp?: Date; // زمان درخواست
}