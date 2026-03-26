const languages = [
  {
    id: "rust",
    label: "Rust",
    prism: "rust",
    icon: "assets/icons/rust.svg",
    code: String.raw`
fn main() {
    const LIMIT: usize = 20;
    let (mut a, mut b): (u128, u128) = (0, 1);
    let mut out = String::new();

    for i in 0..LIMIT {
        out.push_str(&a.to_string());
        out.push(if i + 1 == LIMIT { '\n' } else { ' ' });

        let next = a + b;
        a = b;
        b = next;
    }

    print!("{out}");
}`,
  },
  {
    id: "c",
    label: "C",
    prism: "c",
    icon: "assets/icons/c.svg",
    code: String.raw`
#include <stdio.h>
#include <stdint.h>

int main(void) {
    const int limit = 20;
    uint64_t a = 0;
    uint64_t b = 1;

    for (int i = 0; i < limit; ++i) {
        printf("%llu%s",
               (unsigned long long)a,
               i + 1 == limit ? "\n" : " ");

        uint64_t next = a + b;
        a = b;
        b = next;
    }

    return 0;
}`,
  },
  {
    id: "cpp",
    label: "C++",
    prism: "cpp",
    icon: "assets/icons/cpp.svg",
    code: String.raw`
#include <cstdint>
#include <iostream>

int main() {
    constexpr int limit = 20;
    std::uint64_t a = 0;
    std::uint64_t b = 1;

    for (int i = 0; i < limit; ++i) {
        std::cout << a << (i + 1 == limit ? '\n' : ' ');

        const auto next = a + b;
        a = b;
        b = next;
    }
}`,
  },
  {
    id: "go",
    label: "Go",
    prism: "go",
    icon: "assets/icons/go.svg",
    code: String.raw`
package main

import (
	"fmt"
	"strings"
)

func main() {
	const limit = 20
	a, b := uint64(0), uint64(1)
	var out strings.Builder

	for i := 0; i < limit; i++ {
		fmt.Fprintf(&out, "%d", a)
		if i+1 == limit {
			out.WriteByte('\n')
		} else {
			out.WriteByte(' ')
		}

		a, b = b, a+b
	}

	fmt.Print(out.String())
}`,
  },
  {
    id: "haskell",
    label: "Haskell",
    prism: "haskell",
    icon: "assets/icons/haskell.svg",
    code: String.raw`
import Data.List (intercalate)

limit :: Int
limit = 20

fibs :: [Integer]
fibs = map fst $ iterate (\(a, b) -> (b, a + b)) (0, 1)

main :: IO ()
main = putStrLn $ intercalate " " $ map show $ take limit fibs`,
  },
  {
    id: "swift",
    label: "Swift",
    prism: "swift",
    icon: "assets/icons/swift.svg",
    code: String.raw`
import Foundation

let limit = 20
var a: UInt64 = 0
var b: UInt64 = 1
var values: [String] = []
values.reserveCapacity(limit)

for _ in 0..<limit {
    values.append(String(a))
    let next = a + b
    a = b
    b = next
}

print(values.joined(separator: " "))`,
  },
  {
    id: "javascript",
    label: "JavaScript",
    prism: "javascript",
    icon: "assets/icons/javascript.svg",
    code: String.raw`
const limit = 20;
let a = 0n;
let b = 1n;
const values = [];

for (let i = 0; i < limit; i += 1) {
  values.push(a.toString());
  [a, b] = [b, a + b];
}

console.log(values.join(" "));`,
  },
  {
    id: "python",
    label: "Python",
    prism: "python",
    icon: "assets/icons/python.svg",
    code: String.raw`
LIMIT = 20
a, b = 0, 1
values = []

for _ in range(LIMIT):
    values.append(str(a))
    a, b = b, a + b

print(" ".join(values))`,
  },
  {
    id: "ruby",
    label: "Ruby",
    prism: "ruby",
    icon: "assets/icons/ruby.svg",
    code: String.raw`
limit = 20
a = 0
b = 1
values = []

limit.times do
  values << a.to_s
  a, b = b, a + b
end

puts values.join(" ")`,
  },
  {
    id: "scala",
    label: "Scala",
    prism: "scala",
    icon: "assets/icons/scala.svg",
    code: String.raw`
object Main extends App {
  val limit = 20
  val values = Iterator
    .iterate((BigInt(0), BigInt(1))) { case (a, b) => (b, a + b) }
    .map(_._1)
    .take(limit)
    .mkString(" ")

  println(values)
}`,
  },
  {
    id: "groovy",
    label: "Groovy",
    prism: "groovy",
    icon: "assets/icons/groovy.svg",
    code: String.raw`
def limit = 20
def a = 0G
def b = 1G
def values = []

limit.times {
    values << a
    (a, b) = [b, a + b]
}

println values.join(' ')`,
  },
  {
    id: "kotlin",
    label: "Kotlin",
    prism: "kotlin",
    icon: "assets/icons/kotlin.svg",
    code: String.raw`
import java.math.BigInteger

fun main() {
    val limit = 20
    var a = BigInteger.ZERO
    var b = BigInteger.ONE
    val values = ArrayList<String>(limit)

    repeat(limit) {
        values += a.toString()
        val next = a + b
        a = b
        b = next
    }

    println(values.joinToString(" "))
}`,
  },
  {
    id: "java",
    label: "Java",
    prism: "java",
    icon: "assets/icons/java.svg",
    code: String.raw`
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        final int limit = 20;
        BigInteger a = BigInteger.ZERO;
        BigInteger b = BigInteger.ONE;
        List<String> values = new ArrayList<>(limit);

        for (int i = 0; i < limit; i++) {
            values.add(a.toString());
            BigInteger next = a.add(b);
            a = b;
            b = next;
        }

        System.out.println(String.join(" ", values));
    }
}`,
  },
  {
    id: "csharp",
    label: "C#",
    prism: "csharp",
    icon: "assets/icons/csharp.svg",
    code: String.raw`
using System;
using System.Collections.Generic;
using System.Numerics;

var limit = 20;
var a = BigInteger.Zero;
var b = BigInteger.One;
var values = new List<string>(limit);

for (var i = 0; i < limit; i++)
{
    values.Add(a.ToString());
    (a, b) = (b, a + b);
}

Console.WriteLine(string.Join(" ", values));`,
  },
  {
    id: "elixir",
    label: "Elixir",
    prism: "elixir",
    icon: "assets/icons/elixir.svg",
    code: String.raw`
limit = 20

sequence =
  Stream.unfold({0, 1}, fn {a, b} ->
    {a, {b, a + b}}
  end)
  |> Enum.take(limit)
  |> Enum.join(" ")

IO.puts(sequence)`,
  },
  {
    id: "ocaml",
    label: "OCaml",
    prism: "ocaml",
    icon: "assets/icons/ocaml.svg",
    code: String.raw`
let limit = 20

let fib_sequence count =
  let rec loop a b remaining acc =
    if remaining = 0 then List.rev acc
    else loop b (a + b) (remaining - 1) (string_of_int a :: acc)
  in
  loop 0 1 count []

let () =
  fib_sequence limit
  |> String.concat " "
  |> print_endline`,
  },
  {
    id: "julia",
    label: "Julia",
    prism: "julia",
    icon: "assets/icons/julia.svg",
    code: String.raw`
limit = 20
a = big(0)
b = big(1)
values = String[]

for _ in 1:limit
    push!(values, string(a))
    a, b = b, a + b
end

println(join(values, " "))`,
  },
  {
    id: "zig",
    label: "Zig",
    prism: "zig",
    icon: "assets/icons/zig.svg",
    code: String.raw`
const std = @import("std");

pub fn main() !void {
    const limit: usize = 20;
    var a: u128 = 0;
    var b: u128 = 1;
    var out = std.io.getStdOut().writer();

    for (0..limit) |i| {
        try out.print("{d}{s}", .{ a, if (i + 1 == limit) "\n" else " " });

        const next = a + b;
        a = b;
        b = next;
    }
}`,
  },
];

const themeMeta = document.querySelector('meta[name="theme-color"]');
const codeShell = document.getElementById("code-shell");
const codeSnippet = document.getElementById("code-snippet");
const activeLanguage = document.getElementById("active-language");
const viewerStatus = document.getElementById("viewer-status");
const languageStrip = document.getElementById("language-strip");
const themeButtons = [...document.querySelectorAll(".theme-button")];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const state = {
  index: 0,
  intervalMs: 4800,
  manualPauseMs: 18000,
  autoTimer: null,
  switchTimer: null,
};

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("fullstacktics-theme", theme);
  themeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.themeValue === theme));
  });
  themeMeta?.setAttribute("content", theme === "light" ? "#fbf1c7" : "#1d2021");
}

function initTheme() {
  const saved = localStorage.getItem("fullstacktics-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (systemDark ? "dark" : "light"));
}

function stopAutoCycle() {
  if (state.autoTimer) {
    window.clearTimeout(state.autoTimer);
    state.autoTimer = null;
  }
}

function startAutoCycle() {
  stopAutoCycle();
  if (reducedMotion.matches) {
    viewerStatus.textContent = "manual mode";
    return;
  }

  viewerStatus.textContent = "auto cycling";
  state.autoTimer = window.setTimeout(() => {
    showLanguage((state.index + 1) % languages.length, { source: "auto" });
    startAutoCycle();
  }, state.intervalMs);
}

function scheduleAutoResume() {
  stopAutoCycle();
  if (reducedMotion.matches) {
    viewerStatus.textContent = "manual mode";
    return;
  }

  viewerStatus.textContent = "pinned briefly";
  state.autoTimer = window.setTimeout(() => {
    viewerStatus.textContent = "auto cycling";
    startAutoCycle();
  }, state.manualPauseMs);
}

function createLanguageButtons() {
  const fragment = document.createDocumentFragment();

  languages.forEach((language, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const icon = document.createElement("img");
    const label = document.createElement("span");

    button.type = "button";
    button.className = "language-button";
    button.dataset.index = String(index);
    button.setAttribute("aria-label", `${language.label} Fibonacci implementation`);
    button.setAttribute("aria-pressed", "false");
    button.title = language.label;

    icon.src = language.icon;
    icon.alt = "";
    icon.width = 18;
    icon.height = 18;
    icon.loading = "lazy";
    icon.setAttribute("aria-hidden", "true");

    label.className = "sr-only";
    label.textContent = language.label;

    button.append(icon, label);
    item.append(button);
    fragment.append(item);
  });

  languageStrip.append(fragment);
}

function highlightCurrentSnippet(language) {
  codeSnippet.textContent = language.code.trim();
  codeSnippet.className = `language-${language.prism}`;
  codeShell.firstElementChild.className = `code-block language-${language.prism}`;
  Prism.highlightElement(codeSnippet);
}

function showLanguage(index, options = {}) {
  const language = languages[index];
  state.index = index;

  window.clearTimeout(state.switchTimer);
  codeShell.classList.add("is-switching");

  state.switchTimer = window.setTimeout(() => {
    highlightCurrentSnippet(language);
    activeLanguage.textContent = language.label;

    document.querySelectorAll(".language-button").forEach((button, buttonIndex) => {
      button.setAttribute("aria-pressed", String(buttonIndex === index));
    });

    codeShell.classList.remove("is-switching");
  }, reducedMotion.matches ? 0 : 110);

  if (options.source === "manual") {
    scheduleAutoResume();
  }
}

function bindEvents() {
  languageStrip.addEventListener("click", (event) => {
    const button = event.target.closest(".language-button");
    if (!button) {
      return;
    }

    showLanguage(Number(button.dataset.index), { source: "manual" });
  });

  languageStrip.addEventListener("keydown", (event) => {
    const buttons = [...languageStrip.querySelectorAll(".language-button")];
    const currentIndex = buttons.findIndex((button) => button === document.activeElement);

    if (currentIndex < 0) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      buttons[(currentIndex + 1) % buttons.length].focus();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      buttons[(currentIndex - 1 + buttons.length) % buttons.length].focus();
    }
  });

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(button.dataset.themeValue);
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoCycle();
      return;
    }

    startAutoCycle();
  });

  reducedMotion.addEventListener("change", () => {
    startAutoCycle();
  });
}

createLanguageButtons();
initTheme();
bindEvents();
showLanguage(0);
startAutoCycle();
