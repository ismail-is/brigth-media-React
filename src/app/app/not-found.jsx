// app/not-found.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage or any specific route after a delay
    const timer = setTimeout(() => {
      router.push('/'); // Redirect to the homepage, or change the path as needed
    }, 3000); // Adjust the delay (3000ms = 3 seconds)

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the homepage...</p>
    </>
  );
}
