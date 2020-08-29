import React from 'react';
import { useHistory } from 'react-router-dom';

import s from './TaskList.module.scss';

import { ReactComponent as ReactEditIcon } from '../../img/edit.svg';
import { ReactComponent as ReactDeleteIcon } from '../../img/delete.svg';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

interface ITaskList {
  tasklist: {
    id: number,
    title: string
  }[],
  deletePopup: (id: number) => void
};

const TaskList: React.FC<ITaskList> = props => {
  const {
    tasklist,
    deletePopup
  } = props;
  const history = useHistory();

  const goToDetails = (id: number) => {
    history.push(`/details/${id}`);
  };

  return (
    <div className={s.container}>
      <TransitionGroup className="todo-list">
        <table>
          <tbody>

            {tasklist ?
              tasklist.map((task, index) => {
                return (
                  <CSSTransition
                    in={true}
                    timeout={500}
                    unmountOnExit
                    key={`task-${index}`}
                    classNames={{
                      enter: s.alertEnter,
                      enterActive: s.alertEnterActive,
                      exit: s.alertExit,
                      exitActive: s.alertExitActive
                    }}
                  >
                    <tr>
                      <td
                        className={s.number}
                      >
                        {`Задача № ${task.id}`}
                      </td>

                      <td
                        className={s.task}
                      >
                        {task.title}
                      </td>

                      <td
                        className={s.edit_del}
                      >

                        <ReactEditIcon
                          className={s.editIcon}
                          onClick={() => goToDetails(task.id)}
                          title="Редактировать"
                        />

                        <ReactDeleteIcon
                          className={s.deleteIcon}
                          onClick={() => deletePopup(task.id)}
                          title="Удалить"
                        />
                      </td>
                    </tr>
                  </CSSTransition>
                )
              })
              : null
            }

          </tbody>
        </table>
      </TransitionGroup>
    </div>
  )
}

export default TaskList;