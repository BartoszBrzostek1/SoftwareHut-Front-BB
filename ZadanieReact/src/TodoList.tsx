import React from "react";
import { Post } from "./types";
import './TodoList.css'

interface TodoListProps{
    todo: Post;
}

export const TodoList: React.FC<TodoListProps> = ({ todo }) =>
{
return (
    <div className="body">
        <p>Tytuł: {todo.title} </p>
        <p>Treść: {todo.body} </p>
        <p>---------------------------------------------------------------------------------------</p>
        
    </div>
);
};