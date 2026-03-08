/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import History from "./components/History";
import Message from "./components/Message";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen font-sans bg-paper text-ink selection:bg-rose-200 selection:text-ink">
      <Hero />
      <History />
      <Message />
      <Footer />
    </main>
  );
}
