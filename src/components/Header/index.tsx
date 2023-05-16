import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState, ChangeEvent } from "react";

interface HeaderProps {
  onAddAssignment: (title: string) => void;
}

export function Header({ onAddAssignment }: HeaderProps) {


  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddAssignment(inputValue);
    setInputValue("");
  };
  
  const isButtonDisabled = inputValue.trim() === "";

  let button = (
    <button disabled={isButtonDisabled}>
      Create <AiOutlinePlusCircle size={20} />
    </button>
  );

  if (isButtonDisabled) {
    button = (
      <button disabled>
        Create <AiOutlinePlusCircle size={20} />
      </button>
    );
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>

      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />

        {button}
      </form>
    </header>
  );
}