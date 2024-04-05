import { useState } from 'react';
import { RiCloseCircleLine, RiArrowRightLine } from 'react-icons/ri';
import TaskModal from './TaskModal';

const Task = ({ tasks, removeTask, updateTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = (task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };


  return (
    <div>
      {tasks.map((task, index) => (
        <div className='task-row' key={index}>
          <div onClick={() => openModal(task)} key={task.id}>
            {task.text}
          </div>
          <div className='icons'>
            <RiCloseCircleLine onClick={() => removeTask(task.id)} className='delete-icon' />
            {/* <RiArrowRightLine onClick={() => handleMoveToNextColumn(task.id)} /> */}
          </div>
        </div>
      ))}
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={closeModal}
          updateTask={updateTask}
        />
      )}
    </div>
  );
};

export default Task;
