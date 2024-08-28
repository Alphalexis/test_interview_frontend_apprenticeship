export async function fetchTodoTitles() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          const data = await response.json();
          //we first fetch .json data from the link

          return data.slice(0, 5).map(todo => todo.title); 
          //here we can easily pick how many titles we want, but also what information we want, here its the title, but it could be the completion
        } catch (error) {
          console.error('Error fetching todos:', error);
          return [];
        }
}