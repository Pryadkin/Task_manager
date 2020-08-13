import React from 'react';
import { useHistory } from 'react-router-dom';

import s from './TaskList.module.scss';

interface ITaskList {
  tasklist: {
    id: number,
    title: string
  }[],
  deleteTask: (id: number) => void
}

const TaskList = (props: ITaskList) => {
  const {
    tasklist,
    deleteTask
  } = props;
  const history = useHistory();

  const goToDetails = (id: number) => {
    history.push(`/details/${id}`);
  };

  return (
    <div className="container">
      <table>
        <tbody>

          {tasklist ?
            tasklist.map((task, index) => {
              return (
                <React.Fragment key={`task-${index}`}>
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
                      className={s.del}
                      onClick={() => goToDetails(task.id)}
                    >
                      {'edit'}
                    </td>

                    <td
                      className={s.del}
                      onClick={() => deleteTask(task.id)}
                    >
                      {'delete'}
                    </td>
                  </tr>
                </React.Fragment>
              )
            })
            : null
          }

        </tbody>
      </table>
    </div>
  )
}

export default TaskList;