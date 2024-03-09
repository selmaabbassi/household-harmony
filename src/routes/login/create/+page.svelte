<script>
  import { enhance } from "$app/forms";
</script>

<div class="flex justify-center self-center z-10 h-fit">
  <div class="p-16 bg-base-100 mx-auto rounded-2xl">
    <div class="mb-4">
      <h3 class="font-semibold text-2xl">Create account</h3>
    </div>
    <div class="space-y-5">
      <form method="POST" use:enhance action="?/create">
        <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
            ><path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
            /><path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
            /></svg
          >
          <input type="text" class="grow" name="email" placeholder="Email" />
        </label>
        <label class="w-full input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
            ><path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
            /></svg
          >
          <input
            type="text"
            class="grow"
            name="username"
            placeholder="Username"
          />
        </label>
        <label class="w-full input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
            ><path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            /></svg
          >
          <input
            type="password"
            class="grow"
            name="password"
            placeholder="Password"
          />
        </label>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center bg-secondary hover:bg-accent p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
          >
            Create account
          </button>
        </div>
      </form>
    </div>
    <div class="pt-5 text-center text-gray-400 text-xs">
      <span> Copyright © 2024 - Household Harmony </span>
    </div>
  </div>
</div>
