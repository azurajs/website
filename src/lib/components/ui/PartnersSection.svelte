<script lang="ts">
  import rinckoLogo from "$lib/assets/partners/rincko-dev.png";
  import simoLogo from "$lib/assets/partners/simo.png";
  import gratianLogo from "$lib/assets/partners/gratian.png";
  import eduLogo from "$lib/assets/partners/edu-dev.png";
  import mnnLogo from "$lib/assets/partners/mnn.png";
  import devCenterLogo from "$lib/assets/partners/devcenter.png";
  import astralLogo from "$lib/assets/partners/astral-ia.png";
  import quackLogo from "$lib/assets/partners/quackpay.png";
  import teamProgrammingLogo from "$lib/assets/partners/teamprogramming.png";

  const partners = [
    {
      name: "Rincko Dev",
      logo: rinckoLogo,
      url: "https://www.youtube.com/channel/UCLutaD99Bd75axcoNwyU-iA",
    },
    {
      name: "Simo",
      logo: simoLogo,
      url: "https://simobotlist.online/",
    },
    {
      name: "Gratian Pro",
      logo: gratianLogo,
      url: "https://gratian.pro/",
    },
    {
      name: "Eduardo Developer",
      logo: eduLogo,
      url: "https://www.youtube.com/channel/UCOiAq87wiESjgifU4JozV1w",
    },
    {
      name: "MNN IA",
      logo: mnnLogo,
      url: "https://mnnai.ru/",
    },
    {
      name: "Dev. Center",
      logo: devCenterLogo,
      url: "https://discord.gg/YgZZHkymME",
    },
    {
      name: "Astral AI",
      logo: astralLogo,
      url: "https://astralai.pro/",
    },
    {
      name: "Quack Pay",
      logo: quackLogo,
      url: "https://quackpay.com,br/",
    },
    {
      name: "Team Programming",
      logo: teamProgrammingLogo,
      url: "https://discord.gg/teamprogramming",
    },
  ];
</script>

<section class="max-w-7xl mx-auto px-6 pb-32 pt-12" id="partners">
  <div class="mb-12 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Our Partners</h2>
    <p class="text-neutral-400 max-w-xl mx-auto text-lg">
      Proudly supported by companies that believe in modern backend development.
    </p>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {#each partners as partner}
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center justify-center h-28 p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 hover:bg-neutral-800 transition-all duration-300"
        title={partner.name}
      >
        <img
          src={partner.logo}
          alt={partner.name}
          class="max-h-full max-w-full object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter"
          on:error={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.display = "none";
            if (img.parentElement) {
              img.parentElement.innerText = partner.name;
              img.parentElement.classList.add("text-neutral-500", "text-sm", "font-medium");
            }
          }}
        />
      </a>
    {/each}
  </div>
</section>
