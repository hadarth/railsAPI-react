export const messages = {
    he: {
        resources: {
            event: {
                name: 'ttt |||| ssssss'
            }
        }
    },
    ra: {
        resources: {
            event: {
                name: 'ttt |||| ssssss'
            }
        },
        action: {
            delete: 'מחק',
            show: 'הצג',
            list: 'רשימה',
            save: 'שמור',
            create: 'צור',
            edit: 'ערוך',
            cancel: 'ביטול',
            refresh: 'רענן',
            add_filter: 'הוסף סינון',
            remove_filter: 'הסר סינון',
            back: 'חזור',
        },
        boolean: {
            true: 'כן',
            false: 'לא',
        },
        page: {
            list: 'רשימת %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'צור %{name}',
            delete: 'מחק %{name} #%{id}',
            dashboard: 'לוח המחוונים',
            not_found: 'לא קיים',
        },
        input: {
            file: {
                upload_several:
                    'גרור מספר קבצים להעלאה או לחץ לבחור אחד.',
                upload_single: 'גרור קובץ להעלאה או לחץ לבחור אחד.',
            },
            image: {
                upload_several:
                    'גרור מספר תמונות להעלאה או לחץ לבחור אחת.',
                upload_single:
                    'גרור תמונה להעלאה או לחץ לבחור אחת.',
            },
        },
        message: {
            yes: 'כן',
            no: 'לא',
            are_you_sure: 'האם את/ה בטוח/ה ?',
            about: 'אודות',
            not_found:
                'הכנסת כתובת שגויה או לחצת על קישור לא תקין',
        },
        navigation: {
            no_results: 'לא נמצאו תוצאות',
            page_out_of_boundaries: 'עמוד %{page} מחוץ לתחום',
            page_out_from_end: 'לא ניתן להמשיך מעבר לעמוד האחרון',
            page_out_from_begin: 'לא ניתן לגשת לפני העמוד הראשון',
            page_range_info: '%{offsetBegin}-%{offsetEnd} מתוך %{total}',
            next: 'הבא',
            prev: 'הקודם',
        },
        auth: {
            username: 'שם משתמש',
            password: 'סיסמא',
            sign_in: 'כניסה',
            sign_in_error: 'הכניסה נכשלה, אנא נסו שנית',
            logout: 'התנתקות',
        },
        notification: {
            updated: 'פריט עודכן בהצלחה',
            created: 'פריט נוצר בהצלחה',
            deleted: 'פריט נמחק בהצלחה',
            item_doesnt_exist: 'פריט לא קיים',
            http_error: 'שגיאה בהתקשרות מול השרת',
        },
        validation: {
            required: 'חובה',
            minLength: 'חייב להכיל לפחות %{min} תווים',
            maxLength: 'יכול להכיל לכל היותר %{max} תווים',
            minValue: 'חייב להיות לפחות %{min}',
            maxValue: 'חייב להיות %{max} או פחות',
            number: 'חייב להיות מספר',
            email: 'כתובת דוא"ל לא תקנית',
        },
    },
};
export default messages;
