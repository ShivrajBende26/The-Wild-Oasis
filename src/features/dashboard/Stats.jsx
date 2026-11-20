import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const safebookings = bookings ?? [];
  const safeConfirmedStays = confirmedStays ?? [];

  // 1.
  const numbookings = safebookings.length;

  // 2.
  const sales = safebookings.reduce(
    (acc, cur) => acc + (cur.totalPrice ?? 0),
    0
  );

  // 3.
  const checkins = safeConfirmedStays.length;

  // 4.
  const occupiedNights = safeConfirmedStays.reduce(
    (acc, cur) => acc + (cur.numNights ?? 0),
    0
  );
  const availableNights = numDays * (cabinCount ?? 0);
  const occupation = availableNights > 0 ? occupiedNights / availableNights : 0;
  // num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numbookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
