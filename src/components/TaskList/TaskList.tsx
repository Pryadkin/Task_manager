import React from 'react';

import s from './TaskList.module.scss';

interface ITaskList {
  tasklist: Array<string>
}

const TaskList = ({ tasklist }: ITaskList) => {
  return (
    <div className="container">
      <table>
        <tbody>
          {tasklist ?
            tasklist.map((task, index) => {
              return (
                <React.Fragment key={`task-${index}`}>
                  <tr>
                    <td className={s.number}>
                      {`Задача №${index + 1}`}
                    </td>
                    <td className={s.task}>
                      {task}
                    </td>
                    <td className={s.del}>
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