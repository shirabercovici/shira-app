import styles from "./page.module.css";
import Link from "next/link";

export default function DesignPage() {
  return (
    <div className={styles.rtlPage}>
      <div>
          <p className={styles.duogamiContent}>
            מוצר שבא ללמד אנשים לעשות אוריגאמי ברמות שונות ומותאמות למשתמש
            מהפלאפון. מוצר זה מהווה קפיצת מדרגה לאנשים שמכירים את עולם
            האוריגמי, וגם שער כניסה עבור אנשים חדשים.
          </p>
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
      </div>
      <div>
        <h3 className={styles.duogamiHeader}>צוות</h3>
        {/* Team Member 1 */}
        <div className={styles.teamMemberRow}>
          <div>
            <h6 className={styles.duogamiTeam}>אניה רובינשטיין</h6>
            <p className={styles.duogamiP}>כתיבה</p>
          </div>
          <span className={styles.designLabel}>עיצוב</span>
        </div>

        {/*Team Member 2*/}
        <div className={styles.teamMemberRow}>
          <div>
            <h6 className={styles.duogamiTeam}>רומי באוך</h6>
            <p className={styles.duogamiP}>טיפוגרפיה</p>
          </div>
          <span className={styles.designLabel}>עיצוב</span>
        </div>

        {/*Team Member 3*/}
        <div className={styles.teamMemberRow}>
          <div>
            <h6 className={styles.duogamiTeam}>אביה דרוזין</h6>
            <p className={styles.duogamiP}>סידור וניהול הפרוייקט</p>
          </div>
          <span className={styles.designLabel}>עיצוב</span>
        </div>

        {/* Team Member 4*/}
        <div className={styles.teamMemberRow}>
          <div>
            <h6 className={styles.duogamiTeam}>שחר בן שימול</h6>
            <p className={styles.duogamiP}>חווית ux</p>
          </div>
          <span className={styles.designLabel}>עיצוב</span>
        </div>
      </div>
      <div>
          <p className={styles.duogamiInfoBox}>
האפליקציה שואפת להפוך את אמנות האוריגמי לחוויה עכשווית, נגישה ומרגשת. העיצוב הגרפי הוא כלי מרכזי בהעברת הערכים האלה שילוב בין מסורת ודיוק לבין חדשנות, רוגע והתפתחות אישית. בעזרת שפה חזותית נקייה, צבעוניות רגועה ואלמנטים יפניים, אנו יוצרים חיבור בין עולם האוריגמי הקלאסי לבין סביבה דיגיטלית עכשווית שמעודדת סבלנות, קהילה ויצירה.          </p>
      </div>
      <div>
        <h3 className={styles.duogamiHeader}>רפרנסים מעולמות שונים</h3>
        <img className={styles.duogamiImg} src="/design/Japan.svg" alt="Japan Logo" />
        <h6 className={styles.duogamiRef}>יפן</h6>
        <p className={styles.duogamiRefP}>השראה מהאסתטיקה היפנית</p>
        <hr className={styles.hr}></hr>
        <h6 className={styles.duogamiRefCon}>ניקיון צורני</h6>
        <p className={styles.duogamiPBlue}>חיבור לטבע, פשטות, איזון</p>

        <img className={styles.duogamiImg} src="/design/Japan_flag.svg" alt="Japan flag Logo" />
        <h6 className={styles.duogamiRef}>מינימלים</h6>
        <p className={styles.duogamiRefP}>קווים עדינים וצבעוניות מאופקת</p>
        <hr className={styles.hr}></hr>
        <h6 className={styles.duogamiRefCon}>שימוש בחלל ריק</h6>
        <p className={styles.duogamiPBlue}>להדגיש את התוכן</p>

        <img className={styles.duogamiImg} src="/design/clam.svg" alt="clam Logo" />
        <h6 className={styles.duogamiRef}>תרבות הפנאי</h6>
        <p className={styles.duogamiRefP}>מלאכות ישנות מדיטטיביות</p>
        <hr className={styles.hr}></hr>
        <h6 className={styles.duogamiRefCon}>רעיון היציאה</h6>
        <p className={styles.duogamiPBlue}>אישית</p>

        <img className={styles.duogamiImg} src="/design/mountain.svg" alt="mountain Logo" />
        <h6 className={styles.duogamiRef}>פיתוח עצמי</h6>
        <p className={styles.duogamiRefP}>הדגשת התהליך לא התוצאה</p>
        <hr className={styles.hr}></hr>
        <h6 className={styles.duogamiRefCon}>קידום אישי</h6>
        <p className={styles.duogamiPBlue}>צעד בלמידה והתפתחות</p>
      </div>

      <div>
        <p className={styles.duogamiExp}>יצאנו לחקר מתוך חשיבה על עולמות של תרבות הפנאי, חזרתם של מלאכות ישנות לתרבות, לקחנו השראה מתוך התרבות היפנית ומעיצוב מנימליסטי מתוך מחשבה על חידוש מסורת ישנה וליצור שפה עיצובית שהיא מודרנית. אנחנו תופסים מהמשתמשים אנשים חושבים ועצמאים שאוהבים את הנוסטלגיה ובאותה נשימה נלהבים מהחדשנות ונתנו את האופציה של שימוש עזר בAI.</p>
      </div>
      <div>
        <h3 className={styles.duogamiHeader}>רכיבים</h3>
        <div className={styles.textBlock}>
          <h6 className={styles.duogamiRef}>עיצוב מינימליסטי</h6>
          <p className={styles.duogamiRefExp}>הכחול בא להעביר תחושת חדשנות, מתוך המלאכה אנחנו יוצרים משהו טרנדי.</p>
        </div>
        <img className={`${styles.duogamiImg} ${styles.circleImg}`} src="/design/circle.png" alt="circle create"/>
      </div>
      <div>
        <p className={styles.duogamiConclusion}>המרחב של שקט והתפתחות בתוך סט אפ שנותן תחושת שייכות וחדשנות, קווים פשוטים ונקיים.</p>
      </div>
      </div>

  );
}