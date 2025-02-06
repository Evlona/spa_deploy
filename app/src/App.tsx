import { Text } from "@/components/Text/Text";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { useQuery } from "@tanstack/react-query";
import { testIds } from "@tests/App/config";
import { useCallback, useMemo, useState } from "react";

async function fetchApi(num: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);
  const data = await response.json();
  return data;
}

function randomNumberRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const useGetTodos = () => {
  const [randomId, setRandomId] = useState(randomNumberRange(0, 10));

  const { data, isError, isFetching, isLoading, refetch } = useQuery<Todo>({
    queryKey: ["todos"],
    queryFn: () => fetchApi(randomId),
    enabled: true
  });

  const onClick = useCallback((): void => {
    if (isFetching) return;
    setRandomId(randomNumberRange(0, 10));
    refetch();
  }, [isFetching]);

  const todo = useMemo(() => {
    return data;
  }, [data]);

  const p = []
  p.push(todo)

  return {
    todos: p,
    isError,
    isFetching,
    isLoading,
    onClick,
    refetch
  };
};

export function App() {
  const { todos, isError, isLoading, onClick } = useGetTodos();

  return (
    <Wrapper width="100%" height="100%" data-testid={testIds.app}>
      <Wrapper onClick={onClick} style={{ userSelect: 'none'}}>Generate new id</Wrapper>
      {isError && <Text>There was an error</Text>}
      {isLoading && <Text>Loading...</Text>}
      <Wrapper style={{ display: "flex", flexDirection: "column", gap: "10px", overflowY: "scroll", maxHeight: 400 }}>

      {todos?.map((todo) => (
        <Wrapper key={crypto.getRandomValues(new Uint32Array(1))[0]}>
          <Text>{todo?.title}</Text>
          <Text>{todo?.completed ? "Completed" : "Not completed"}</Text>
        </Wrapper>
      ))}
      </Wrapper>
    </Wrapper>
  );
}
