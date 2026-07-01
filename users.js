const SUPABASE_URL = "https://kaghxnbxcflkyjevbnuy.supabase.co";
const SUPABASE_KEY = "sb_publishable_O6_AQNQir1nJZksb88ykLA_YVsRUm-i";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const regForm = document.getElementById("registerForm");

regForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabaseClient.from("users").insert({
    email: email,
    password: password,
    name: name,
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Пользователь зарегистрирован");
  window.location.href = "index.html";
  regForm.reset();
});

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const { data, error } = await supabaseClient
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password);

  if (error) {
    alert(error.message);
    return;
  }

  if (data.length === 0) {
    alert("Неверный email или пароль");
    return;
  }

  alert(`Добро пожаловать, ${data[0].name || "пользователь"}!`);
  window.location.href = "index.html";
  loginForm.reset();
});
