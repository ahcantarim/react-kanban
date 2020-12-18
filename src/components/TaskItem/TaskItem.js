import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TaskItem.css";

export default function TaskItem({
  id,
  title,
  state,
  onTaskUpdate,
  onTaskDelete
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, state);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);

      if (editableTitle.length === 0) {
        onTaskDelete(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTaskStateChange} value={state}>
          <option value="0">To do</option>
          <option value="1">In progress</option>
          <option value="2">Done</option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};
