import { bd } from "../../../../../bd";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { Main } from "./Main";

export function Edit({ index, show, setShow, setdata }) {
  var actual = bd[index];
  return (
    <div className="absolute left-0 top-0 w-full bg-slate-200 lg:flex">
        <Header data={actual} show={show} setShow={setShow} setdata={setdata} index={index}/>
        <Main data={actual}/>
    </div>
  );
}

Edit.propTypes = {
  index: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
