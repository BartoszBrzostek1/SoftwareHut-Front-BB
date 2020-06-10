import React from 'react';
import { useService } from '../../hooks/useService';
import { TodoService } from '../../services/todo.service';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../store/selectors/todos.selectors';
import { useState } from 'react';
import NavPanel from '../../components/navPanel/NavPanel'

const Favorites = () => {
    return (
        <div>
            <NavPanel />


        </div>
    );
};

export default Favorites;