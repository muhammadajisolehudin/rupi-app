// beranda
export const formatRupiah = (amount) => {
  if (!amount) return "Rp 0";
  const number = parseFloat(amount);
  return `${number.toLocaleString("id-ID", {
    //  style: "currency",
    //  currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
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

// import { useState } from "react";
//ubah struktru data
export const updateStructCategory = (dataIncome) => {
  const categories = dataIncome?.categories;

  if (!Array.isArray(categories)) {
    return dataIncome;
  }

  // Temukan mutasi dengan description "Topup" dari semua kategori
  const searchMutations = categories.flatMap((category) =>
    category.mutations.filter(
      (mutation) =>
        mutation.description === "Topup" || mutation.description === "Withdraw"
    )
  );

  const hasTopup = searchMutations.some(
    (mutation) => mutation.description === "Topup"
  );

  // if (hasTopup) {
  //   setIsTopup(true);
  // } else {
  //   setIsTopup(false);
  // }
  // Jika tidak ada mutasi dengan description "Topup", kembalikan data income tanpa perubahan
  if (searchMutations.length === 0) {
    return dataIncome;
  }

  // Hitung total_balance dari semua amount dalam searchMutations
  const totalBalance = searchMutations
    .reduce((sum, mutation) => sum + parseFloat(mutation.amount), 0)
    .toFixed(2); // Format dua desimal

  // Hitung total_balance_percentage berdasarkan totalIncome ---
  const financialTransactions = categories
    .flatMap((category) => category.mutations)
    .reduce((sum, mutation) => sum + parseFloat(mutation.amount), 0);

  const totalBalancePercentage =
    (parseFloat(totalBalance) / financialTransactions) * 100;

  // Buat kategori baru dengan mutasi Topup
  const newCategory = {
    mutations: searchMutations,
    type: hasTopup ? "TOPUP" : "WITHDRAW",
    number_of_transactions: searchMutations.length,
    total_balance: totalBalance,
    total_balance_percentage: totalBalancePercentage,
  };

  // Tambahkan kategori baru ke array categories
  const updatedCategories = [...categories, newCategory];

  // Perbarui total_balance dan total_balance_percentage untuk kategori TRANSFER
  const financialTransactionsWithNewCategory = updatedCategories
    .flatMap((category) => category.mutations)
    .reduce((sum, mutation) => sum + parseFloat(mutation.amount), 0);

  const updatedCategoriesWithPercentages = updatedCategories.map((category) => {
    if (category.type === "TRANSFER") {
      const balance = category.mutations
        .reduce((sum, mutation) => sum + parseFloat(mutation.amount), 0)
        .toFixed(2);

      const percentage =
        (parseFloat(balance) / financialTransactionsWithNewCategory) * 100;

      return {
        ...category,
        total_balance: balance,
        total_balance_percentage: percentage,
      };
    }
    return category;
  });

  // Kembalikan data income dengan kategori baru ditambahkan dan kategori TRANSFER diperbarui
  return {
    ...dataIncome,
    categories: updatedCategoriesWithPercentages,
  };
};

import dayjs from "dayjs";

export const formatDateRange = (dateRange) => {
  const [startDate, endDate] = dateRange;

  // Format tanggal ke 'YYYY-MM-DD'
  const formattedStartDate = startDate
    ? dayjs(startDate).format("YYYY-MM-DD")
    : "";
  const formattedEndDate = endDate ? dayjs(endDate).format("YYYY-MM-DD") : "";

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
