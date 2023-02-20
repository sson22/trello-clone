import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";
const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
// interface IForm {
//   toDo: string;
// }
function DragabbleCard({ toDoId, toDoText, index }: IDragabbleCardProps) {
  const setToDos = useSetRecoilState(toDoState);
  console.log(setToDos);
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{toDoText}</span>
            <span style={{ width: "17px", cursor: "pointer" }}></span>
          </div>
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DragabbleCard);
