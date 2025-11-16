import styles from "./page.module.css";
import Link from "next/link";

export default function DesignPage() {
  return (
    <div>
      {/*
        The fix is to use the imported `styles` object.
        `className={styles.duogamiContent}` is correct.
        `className="duogamiContent"` would be incorrect and cause the error.
      */}
      <div className={styles.duogamiContent}>
        <Link href="#" className={styles.DuoGamiLink}>
          <p>
            מוצר שבא ללמד אנשים לעשות אוריגאמי ברמות שונות ומותאמות למשתמש
            מהפלאפון. מוצר זה מהווה קפיצת מדרגה לאנשים שמכירים את עולם
            האוריגמי, וגם שער כניסה עבור אנשים חדשים
          </p>
        </Link>
      </div>
      <div>
        <h3 className={styles.duogamiHeader}>קטגוריות</h3>
        <h6 className={styles.duogamiCategory}>בעלי חיים</h6>
        <p className={styles.duogamiP}>ציפורים, דגים, חרקים, יונקים, זוחלים</p>
        <h6 className={styles.duogamiCategory}>צמחים בטבע</h6>
        <p className={styles.duogamiP}>פרחים, עלים, עצים, פירות</p>
        <h6 className={styles.duogamiCategory}>חפצים ופריטים יומיומיים</h6>
        <p className={styles.duogamiP}>קופסאות, כוכבים, סירות, בגדים, קישוטים</p>
        <h6 className={styles.duogamiCategory}>אנשים ודמויות</h6>
        <p className={styles.duogamiP}>דמויות אדם, בובות, פרצופים מעוצבים</p>
        <h6 className={styles.duogamiCategory}>פנטזיה ויצורים מיתולוגיים</h6>
        <p className={styles.duogamiP}>דרקונים, חד־קרן, עוף החול, מפלצות</p>
        <h3 className={styles.duogamiHeader}>צוות</h3>
        <h6 className={styles.duogamiP}>אניה רובינשטיין</h6>
        <p className={styles.duogamiP}>כתיבה</p>

        



        </div>
      </div>

  );
}