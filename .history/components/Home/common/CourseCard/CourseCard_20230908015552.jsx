import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";
import course from "../../../../public/assets/courseCard/course.png";
import lessons from "../../../../public/assets/courseCard/lessons.png";
import level from "../../../../public/assets/courseCard/level.png";
import rating4 from "../../../../public/assets/courseCard/rating4.png";
import students from "../../../../public/assets/courseCard/students.png";

const CourseCard = ({ slug }) => {
  return (
    <>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={course}
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>Artificial intelligence</h1>
        <div className={styles.stats_contianer}>
          <div className={styles.stats}>
            <Image src={lessons} />
            Lesson: 120
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            Certificates: 3
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Beginner to Advance Level
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}>Start Course {" > "}</button>
          </Link>
          <Image src={rating4} />
        </div>
        {/* Google Form Link */}
        <a
          href="https://forms.gle/dod97Bdxff1VpqyB8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Course Form
        </a>
      </div>
    </>
  );
};

export default CourseCard;
