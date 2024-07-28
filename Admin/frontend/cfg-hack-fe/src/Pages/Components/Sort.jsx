import { FaSort } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
export default function Sort({ state }) {
  if (state == 0) return <FaSort />;
  else if (state == 1) return <FaSortDown />;
  else if (state == 2) return <FaSortUp />;
}
