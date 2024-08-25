// beranda
export const formatRupiah = (amount) => {
  if (!amount) return "Rp 0";
  const number = parseFloat(amount);
  return `${number.toLocaleString("id-ID", {
    //  style: "currency",
    //  currency: "IDR",
    minimumFractionDigits: 0, // Mengatur jumlah digit desimal minimum menjadi 0
    maximumFractionDigits: 0, // Mengatur jumlah digit desimal maksimum menjadi 0
  })}`;
};
export const formatAccountNumber = (number) => {
  const cleaned = ("" + number).replace(/\D/g, "");
  const formatted = cleaned.replace(/(.{3})(?=.)/g, "$1-");
  return formatted;
};

//info saldo utils
export const parsePercentage = (dataPercentage) => {
  return parseFloat(dataPercentage?.toFixed(2)) || 0;
};

export const getTotalTransaction = (dataTransaction) => {
  const total = Array.isArray(dataTransaction) ? dataTransaction.length : 0;
  return total;
};

export const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);

  // Format bulan dan tanggal
  const day = date.getDate();
  const month = date.toLocaleString("id-ID", { month: "long" }); // Menggunakan locale 'id-ID' untuk format bulan dalam bahasa Indonesia
  const year = date.getFullYear();

  // Format string tanggal
  return `${day} ${month} ${year}`;
};

export const groupByDate = (mutations) => {
  return mutations?.reduce((acc, mutation) => {
    const date = new Date(mutation.created_at);
    const formattedDate = date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    if (!acc[formattedDate]) {
      acc[formattedDate] = [];
    }

    acc[formattedDate].push(mutation);

    return acc;
  }, {});
};

export const formatGroupedData = (groupedData) => {
  if (
    groupedData &&
    typeof groupedData === "object" &&
    !Array.isArray(groupedData)
  ) {
    return Object.entries(groupedData).map(([date, transactions]) => ({
      date,
      transactions,
    }));
  } else {
    console.error("Invalid groupedData:", groupedData);
    return [];
  }
};

import dayjs from "dayjs";

export const formatDateRange = (dateRange) => {
  const [startDate, endDate] = dateRange;

  // Format tanggal ke 'YYYY-MM-DD'
  const formattedStartDate = startDate
    ? dayjs(startDate).format("YYYY-MM-DD")
    : "";
  const formattedEndDate = endDate
    ? dayjs(endDate).format("YYYY-MM-DD")
    : "";

    return {
      start: formattedStartDate,
      end: formattedEndDate,
    };
  };

  //qr transfer

  export const formatExpiryDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = new Date(dateString);
    date.setHours(date.getHours() - 7);
    return `${date.toLocaleDateString("id-ID", options)}`;
  };


  // mutasi 
  export const hideAccountNumber = (number) => {
    if (!number || number.length <= 4) return number; // Cek jika number tidak ada atau terlalu pendek
    const visiblePart = number.slice(-4); // Menampilkan 4 digit terakhir
    const hiddenPart = "*".repeat(number.length - 4); // Menyembunyikan digit sisanya
    return `${hiddenPart}${visiblePart}`;
  };
