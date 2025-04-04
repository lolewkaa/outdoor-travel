'use client'
export default function Error({ error, reset }) {
    return (
      <div>
        <h2>Произошла ошибка!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Попробовать снова</button>
      </div>
    );
  }