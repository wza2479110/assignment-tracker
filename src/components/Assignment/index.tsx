// import styles from "./assignment.module.css";
// import { TbTrash } from "react-icons/tb";

// export function Assignment() {
//   return (
//     <div className={styles.assignment}>
//       <button className={styles.checkContainer}>
//         <div />
//       </button>

//       <p>Some Title</p>

//       <button className={styles.deleteButton}>
//         <TbTrash size={20} />
//       </button>
//     </div>
//   );
// }


import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

interface AssignmentProps {
  title: string;
}

export function Assignment({ title }: AssignmentProps) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{title}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
