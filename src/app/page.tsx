import AuthForm from "@/components/auth-form";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AuthForm />
      </main>
    </div>
  );
}
