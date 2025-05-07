import AuthForm from "@/components/auth-form";
import styles from "./page.module.css";
import clientStorage from "@/utils/clientStorage";
import { redirect } from "next/navigation";
export default function Home() {
  if (clientStorage.get('email')) {
    redirect('/dashboard')
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AuthForm />
      </main>
    </div>
  );
}
