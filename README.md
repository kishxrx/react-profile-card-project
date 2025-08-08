# Modern React Profile Card

A responsive and fully customized profile card built with Vite, React, and Tailwind CSS. This project serves as a demonstration of modern front-end development skills and component-based architecture.

### 🚀 Live Deployed Site

**View the live project here:** [**react-profile-card-project.vercel.app**](https://react-profile-card-project.vercel.app/)




### 💡 The Challenge: Overcoming Real-World Setup Hurdles

Beyond writing React code, this project became a deep-dive into solving complex, real-world environment and dependency issues that developers face daily.

Here’s a summary of the challenges I diagnosed and solved:

* **System & Environment Configuration:**
    * **Problem:** The initial setup failed due to system-level issues, including `ENOSPC` (no space left) errors and Windows PowerShell security policies blocking scripts.
    * **Solution:** I successfully debugged the root cause and reconfigured the `npm` and `yarn` cache paths to a different drive, demonstrating the ability to adapt and manage development environments. I also switched terminals to bypass security restrictions.

* **Advanced Dependency Management:**
    * **Problem:** `npm install` repeatedly created a broken project due to incompatible, "bleeding-edge" versions of Tailwind CSS and its dependencies.
    * **Solution:** Instead of giving up, I took control of the build process. I manually "pinned" all `devDependencies` in `package.json` to known-stable versions, performed a "deep clean" of the project (deleting `node_modules`, `package-lock.json`, and clearing the cache), and successfully forced a stable, repeatable installation.

This journey highlights a key developer skill: **resilience**. I am not just able to write code, but can also systematically debug, diagnose, and overcome complex technical roadblocks to deliver a working product.

---

### 🛠️ Core Technologies

* **React** & **Vite**
* **Tailwind CSS**
* **Vercel / Render** for Deployment

