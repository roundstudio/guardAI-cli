import { Camera } from "../../camera/types";
import { ObjectType } from "../../object-detection/types";
import { Gpio } from "../../gpio/types/gpio.type";

export type RuleStatus = 'active' | 'inactive' | 'scheduled';

export type RulePriority = 1 | 2 | 3 | 4;

export interface Rule {
    id?: number;
    name: string;
    description: string;
    created_at?: string;
    updated_at?: string;
    
    // ارتباطات
    camera?: Camera[];
    object_types?: ObjectType[];
    gpio?: Gpio[];
    
    // تنظیمات اصلی
    status?: RuleStatus;
    priority?: RulePriority;
    
    // تنظیمات زمانی
    start_time?: string | null;
    end_time?: string | null;
    
    // تنظیمات تشخیص
    confidence_threshold?: number;
    detection_interval?: number;
    
    // تنظیمات هشدار
    notification_cooldown?: number;
}

export const STATUS_CHOICES: Record<RuleStatus, string> = {
    'active': 'فعال',
    'inactive': 'غیرفعال',
    'scheduled': 'زمانبندی شده'
};

export const PRIORITY_CHOICES: Record<RulePriority, string> = {
    1: 'کم',
    2: 'متوسط',
    3: 'زیاد',
    4: 'بحرانی'
};

