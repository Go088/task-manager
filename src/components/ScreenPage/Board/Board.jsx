import css from "./Board.module.css";

const Bord = ({ theme }) => {
  const isColumns = board.columns?.length > 0;
  return (
    <div
      className={clsx(css.columnContainer, theme + "firstScrol", css[theme])}
    >
      {/* <SimpleBar autoHide={false} forceVisible="x"> */}
      <div className={css.columnWrapper}>
        {isColumns &&
          board.columns.map((column) => {
            return <Column key={column._id} column={column} theme={theme} />;
          })}

        <AddAnotherButton theme={theme} />
      </div>
      {/* </SimpleBar> */}
    </div>
  );
};
export default Bord;
