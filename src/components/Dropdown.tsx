import {
  FiEdit,
  FiTrash,
  FiShare,
  FiPlusSquare,
  FiChevronDown,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, JSX, SetStateAction, useState } from "react";
import { categories } from "../data/categories";

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

type DropdownProps = {
  options: string[]
}

const Dropdown = ({ options }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div animate={open ? "open" : "closed"} className="w-max relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
      >
        <span className="font-medium text-sm">Post actions</span>
        <motion.span variants={iconVariants}>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </motion.span>
      </button>
      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] overflow-hidden"
      >
        {options.map(category => (
          <Option key={category} setOpen={setOpen} Icon={FiEdit} text={category} />
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
}: {
  text: string;
  Icon: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default Dropdown;
