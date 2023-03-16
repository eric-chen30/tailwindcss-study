<template>
  <!-- Line 1 -->
  <div class="out-flex-box">
    <!-- button -->
    <div class="flex flex-col flex-1">
      <div class="inline-flex-box">
        <button class="btn btn-ghost rotate-12">Button</button>
        <button class="btn btn-primary">Button</button>
        <button class="btn w-60 rounded-full hover:bg-red-500">Button</button>
      </div>
      <div class="inline-flex-box">
        <button class="btn btn-outline btn-info">Info</button>
        <button class="btn btn-outline btn-success">Success</button>
        <button class="btn btn-outline btn-warning">Warning</button>
        <button class="btn btn-outline btn-error">Error</button>
      </div>
      <div class="inline-flex-box">
        <button class="btn btn-lg">Large</button>
        <button class="btn glass">Normal</button>
        <button class="btn btn-sm btn-disabled">Small</button>
        <button class="btn btn-xs loading">Tiny</button>
      </div>
    </div>
    <!-- wrap -->
    <div class="flex flex-1 justify-around">
      <div class="inline-flex-box">
        <label class="swap">
          <input type="checkbox" />
          <div class="swap-on">ON</div>
          <div class="swap-off">OFF</div>
        </label>
      </div>
      <div class="inline-flex-box">
        <label class="swap">
          <input type="checkbox" />
          <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>
          <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>
        </label>
      </div>
      <div class="inline-flex-box">
        <label class="swap swap-rotate">
          <input type="checkbox" />
          <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        </label>
      </div>
      <div class="inline-flex-box">
        <label class="swap swap-flip text-6xl">
          <input type="checkbox" />
          <div class="swap-on">😈</div>
          <div class="swap-off">😇</div>
        </label>
      </div>
    </div>
    <!-- alert -->
    <div class="flex-1 flex-col">
      <div class="alert shadow-lg mt-6">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>12 unread messages. Tap to see.</span>
        </div>
      </div>
      <div class="alert alert-error shadow-lg mt-6">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Error! Task failed successfully.</span>
        </div>
      </div>
      <div class="alert shadow-lg mt-6">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>we use cookies for no reason.</span>
        </div>
        <div class="flex-none">
          <button class="btn btn-sm btn-ghost">Deny</button>
          <button class="btn btn-sm btn-primary">Accept</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Line 2 -->
  <div class="out-flex-box">
    <!-- avatar -->
    <div class="flex flex-col flex-1">
      <div class="inline-flex-box">
        <div class="avatar">
          <div class="w-24 rounded">
            <img src="../../assets/images/avatar.jpg" />
          </div>
        </div>
        <div class="avatar online">
          <div class="w-24 rounded-xl">
            <img src="../../assets/images/avatar.jpg" />
          </div>
        </div>
        <div class="avatar offline">
          <div class="w-24 rounded-full">
            <img src="../../assets/images/avatar.jpg" />
          </div>
        </div>
      </div>
      <div class="inline-flex-box">
        <div class="avatar">
          <div class="w-24 mask mask-squircle">
            <img src="../../assets/images/avatar.jpg" />
          </div>
        </div>
        <div class="avatar">
          <div class="w-24 mask mask-hexagon">
            <img src="../../assets/images/avatar.jpg" />
          </div>
        </div>
        <div class="avatar">
          <div class="w-24 mask mask-triangle">
            <img src="../../assets/images/avatar.jpg" />
          </div>
        </div>
      </div>
      <div class="inline-flex-box">
        <div class="avatar-group -space-x-6">
          <div class="avatar">
            <div class="w-12">
              <img src="../../assets/images/avatar.jpg" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-12">
              <img src="../../assets/images/avatar.jpg" />
            </div>
          </div>
          <div class="avatar placeholder">
            <div class="w-12 bg-neutral-focus text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- card1 -->
    <div class="flex flex-col flex-1">
      <div class="inline-flex-box">
        <div class="card w-64 glass">
          <figure><img src="../../assets/images/bg2.png" alt="car!"/></figure>
          <div class="card-body">
            <h2 class="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- card2 -->
    <div class="flex flex-col flex-1 justify-center">
      <div class="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src="../../assets/images/bg2.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Line 3 -->
  <div class="out-flex-box">
    <!-- carousel -->
    <div class="flex flex-col flex-1">
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img src="../../assets/images/wallhaven-1.jpg" class="w-full" />
        </div> 
        <div id="item2" class="carousel-item w-full">
          <img src="../../assets/images/wallhaven-2.jpg" class="w-full" />
        </div> 
        <div id="item3" class="carousel-item w-full">
          <img src="../../assets/images/wallhaven-3.jpg" class="w-full" />
        </div> 
        <div id="item4" class="carousel-item w-full">
          <img src="../../assets/images/wallhaven-4.jpg" class="w-full" />
        </div>
      </div> 
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">1</a> 
        <a href="#item2" class="btn btn-xs">2</a> 
        <a href="#item3" class="btn btn-xs">3</a> 
        <a href="#item4" class="btn btn-xs">4</a>
      </div>
    </div>
    <!-- chat bubble -->
    <div class="flex flex-col flex-1 justify-center mx-10">
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-bubble chat-bubble-error">It's never happened before.</div>
      </div>
    </div>
    <!-- Collapse -->
    <div class="flex flex-col flex-1 justify-center">
      <div class="text-center my-2 text-cyan-700 font-bold">点击我有惊喜呦！</div>
      <div class="collapse rounded-lg">
        <input type="checkbox" class="peer" /> 
        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Click me to show/hide content
        </div>
        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p>hello</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Line 4 -->
  <div class="out-flex-box">
    <div class="flex flex-col felx-1"></div>
    <div class="flex flex-col felx-1"></div>
    <div class="flex flex-col felx-1"></div>
  </div>
  <!-- Line 5 -->
  <div class="out-flex-box">
    <!-- countDown -->
    <div class="flex flex-col flex-1">
      <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style="--value:15;"></span>
          </span>
          days
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style="--value:10;"></span>
          </span>
          hours
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style="--value:24;"></span>
          </span>
          min
        </div> 
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span style="--value:28;"></span>
          </span>
          sec
        </div>
      </div>
    </div>
    <!-- Progress -->
    <div class="flex flex-1 justify-center items-center">
      <div>
        <progress class="progress progress-error w-80" value="0" max="100"></progress>
        <progress class="progress progress-error w-80" value="10" max="100"></progress>
        <progress class="progress progress-error w-80" value="40" max="100"></progress>
        <progress class="progress progress-error w-80" value="70" max="100"></progress>
        <progress class="progress progress-error w-80" value="100" max="100"></progress>
      </div>
    </div>
    <!-- Stat -->
    <div class="flex flex-col flex-1">
      <div class="stats bg-primary text-primary-content">
        <div class="stat">
          <div class="stat-title">Account balance</div>
          <div class="stat-value">$89,400</div>
          <div class="stat-actions">
            <button class="btn btn-sm btn-success">Add funds</button>
          </div>
        </div>
        <div class="stat">
          <div class="stat-title">Current balance</div>
          <div class="stat-value">$89,400</div>
          <div class="stat-actions">
            <button class="btn btn-sm">Withdrawal</button> 
            <button class="btn btn-sm">deposit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Line 6 -->
  <div class="out-flex-box">
    <!-- CheckBox / FileInput / Raido / Rage / Rating -->
    <div class="flex flex-col flex-1 items-center">
      <!-- CheckBox -->
      <div class="form-control mb-3">
        <label class="cursor-pointer label">
          <input type="checkbox" checked class="checkbox checkbox-success" />
          <input type="checkbox" checked class="checkbox checkbox-warning mx-3" />
          <input type="checkbox" checked class="checkbox checkbox-error" />
        </label>
      </div>
      <!-- FileInput -->
      <div class="mb-3">
        <input type="file" class="file-input file-input-bordered file-input-primary w-full max-w-xs" />
      </div>
      <!-- Raido -->
      <div class="mb-3">
        <input type="radio" name="radio-5" class="radio checked:bg-red-400" checked />
        <input type="radio" name="radio-5" class="radio checked:bg-green-500 mx-3" />
      </div>
      <!-- Range -->
      <div class="mb-3">
        <input type="range" min="0" max="100" value="40" class="range range-primary w-72" />
      </div>
      <!-- Rating -->
      <div class="mb-3">
        <div class="rating gap-1">
          <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
          <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />
          <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
          <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
          <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <!-- Select -->
      <div class="mt-3">
        <select class="select select-secondary w-full max-w-xs">
          <option disabled selected>Pick your favorite language</option>
          <option>Java</option>
          <option>Go</option>
          <option>C</option>
          <option>JavaScript</option>
          <option>Python</option>
        </select>
      </div>
      <!-- Input -->
      <div class="mt-3">
        <input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs" />
      </div>
      <!-- Textarea -->
      <div class="mt-3">
        <textarea class="textarea textarea-secondary w-80" placeholder="Bio"></textarea>
      </div>
    </div>
    <div class="flex flex-col flex-1">
      <div class="mt-3">
        <input type="checkbox" class="toggle toggle-success mx-3" checked />
        <input type="checkbox" class="toggle toggle-warning mx-3" checked />
        <input type="checkbox" class="toggle toggle-info mx-3" checked />
        <input type="checkbox" class="toggle toggle-error mx-3" checked />
      </div>
      <div class="divider">OR</div>
      <div class="btn-group mt-3">
        <button class="btn btn-active">Button</button>
        <button class="btn">Button</button>
        <button class="btn">Button</button>
      </div>
      <div class="divider">OR</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.out-flex-box {
  @apply flex mx-2 my-2
}
.inline-flex-box {
  @apply flex justify-around m-2
}
</style>