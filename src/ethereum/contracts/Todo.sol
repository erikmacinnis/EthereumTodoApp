pragma solidity ^0.8.0;

contract Todo {
  
  uint public count = 0;

  mapping(uint => Task) public tasks;


  constructor(string memory _content) {
    count ++;
    tasks[count] = Task(count, _content, false);
    emit TaskCreated(count, _content, false);
  }

  struct Task {
    uint id;
    string content;
    bool completed;
  }

  event TaskCreated(
    uint id,
    string content,
    bool completed
  );

  event TaskCompleted(
    uint id,
    bool completed
  );

  function createTask(string memory _content) public {
    count ++;
    tasks[count] = Task(count, _content, false);
    emit TaskCreated(count, _content, false);
  }

  function checkTask(uint _id) public {
    Task memory _task = tasks[_id];
    _task.completed = !_task.completed;
    tasks[_id] = _task;
    emit TaskCompleted(_id, _task.completed);
  }

}