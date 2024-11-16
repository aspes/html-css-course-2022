Having assembled a team of top-notch AI and CPU engineers, start-up Tenstorrent, helmed by industry icon Jim Keller, has huge plans that involve both general-purpose processors and artificial intelligence accelerators. 정선만항재길.

At present, the company is working on the industry's first 8-wide decoding RISC-V core capable of addressing both client and HPC workloads that will be first used for a 128-core high-performance CPU aimed at data centers. The company also has a roadmap of several more generations of processors, which we'll cover below. 

We recently spoke with Wei-Han Lien, the chief CPU architect at Tenstorrent, about the company's vision and roadmap. Lien has an impressive background, with stints at NexGen, AMD, PA-Semi, Apple, and is perhaps best known for for his work on Apple's A6, A7 (world's first 64-bit Arm SoC), and M1 CPU microarchitectures and implementation. 

With many world-class engineers with vast experience in x86 and Arm designs, one may ask why Tenstorrent decided to develop RISC-V CPUs considering that the data center software stack for this instruction set architecture (ISA) is not as comprehensive as that for x86 and Arm. The answer Tenstorrent gave us is simple: x86 is controlled by AMD and Intel, and Arm is governed by Arm Holding, which limits the pace of innovation. 

"Only two companies in the world can do x86 CPUs," said Wei-Han Lien. "Due to the x86 license restriction, innovation is basically controlled by one or two companies. When companies get really big, they become bureaucratic hierarchically, and the pace of innovation [slows]. […] Arm is kind of the same thing. They claim they are like a RISC-V company, but if you look at their specification, [it] becomes so complicated. It is also actually kind of dominated by one architect. […] Arm kind of dictating all the possible scenario even to architecture [license] partners." 

By contrast, RISC-V is developing quickly. Since it is an open-source ISA, it is easier and faster to innovate with it, particularly when it comes to emerging and rapidly developing AI solutions, according to Tenstorrent. 

"I was looking for a companion processor solution for [Tenstorrent's] AI solution, and then we wanted BF16 data type, and then we went to Arm and said, 'Hey, can you support us?' They said 'no,' it requires like maybe two years internal discussion and discussion with partners and whatever," explained Lien. "But we talked to SiFive; they just put it in there. So, there is no restriction, they built it for us, and it is freedom." 

On the one hand, Arm Holding's approach ensures high quality of the standard as well as a comprehensive software stack, but it also means that the pace of ISA innovation gets slower, which might be a problem for emerging applications like AI processors that are meant to be developed quickly. 

Stay On the Cutting Edge: Get the Tom's Hardware Newsletter
Get Tom's Hardware's best news and in-depth reviews, straight to your inbox.

# Your Email Address
Contact me with news and offers from other Future brands
Receive email from us on behalf of our trusted partners or sponsors
By submitting your information you agree to the Terms & Conditions and Privacy Policy and are aged 16 or over.
One Microarchitecture, Five CPU IPs in One Year
Since Tenstorrent is looking forward and addressing AI applications at large, it needs not only different system-on-chips or system-in-packages but also various CPU microarchitecture implementations and system-level architectures to hit diverse power and performance goals. This is exactly the department of Wei-Han Lien. 

A humble consumer electronics SoC and a mighty server processor have little in common but can share the same ISA and microarchitecture (albeit implemented differently). This is where Lien's team comes in. Tenstorrent says that the CPU crew has developed an out-of-order RISC-V microarchitecture and implemented it in five different ways to address a variety of applications. 

Tenstorrent now has five different RISC-V CPU core IPs — with two-wide, three-wide, four-wide, six-wide, and eight-wide decoding — to use in its own processors or license to interested parties. For those potential customers who need a very basic CPU, the company can offer small cores with two-wide execution, but for those who need higher performance for edge, client PCs, and high-performance computing, it has six-wide Alastor and eight-wide Ascalon cores.  

Each out-of-order Ascalon (RV64ACDHFMV) core with eight-wide decode has six ALUs, two FPUs, and two 256-bit vector units, making it quite beefy. Considering that modern x86 designs use four-wide (Zen 4) or six-wide (Golden Cove) decoders, we are looking at a very capable core. 

Wei-Han Lien was one of the designers responsible for Apple's 'wide' CPU microarchitecture, which can execute up to eight instructions per clock. For example, Apple's A14 and M1 SoCs feature eight-wide high-performance Firestorm CPU cores, and two years after these were introduced, they are still among the most power-efficient designs in the industry. Lien is probably one of the industry's best specialists in 'wide' CPU microarchitecture, and, as far as we understand, the only processor designer who leads a team of engineers developing an eight-wide RISC-V high-performance CPU core. 

In addition to a variety of RISC-V general-purpose cores, Tenstorrent has its proprietary Tensix cores tailored for neural network inference and training. Each Tensix core comprises of five RISC cores, an array math unit for tensor operations, a SIMD unit for vector operations, 1MB or 2MB of SRAM, and fixed function hardware for accelerating network packet operations and compression/decompression. Tensix cores support a variety of data formats, including BF4, BF8, INT8, FP16, BF16, and even FP64.

Right now, Tenstorrent has two products: a machine learning processor called Grayskull that offers performance of around 315 INT8 TOPS that plugs into a PCIe Gen4 slot, as well as a networked Wormhole ML processor with approximately 350 INT8 TOPS of performance and uses a GDDR6 memory subsystem, a PCIe Gen4 x16 interface and has a 400GbE connection to other machines. 

Both devices require a host CPU and are available as add-in-boards as well as inside pre-built Tenstorrent servers. One 4U Nebula server containing 32 Wormhole ML cards offers around 12 INT8 POPS of performance at 6kW.

Later this year, the company plans to tape out its first standalone CPU+ML solution — Black Hole — that combines 24 SiFive X280 RISC-V cores and a multitude of 3rd Generation Tensix cores interconnected using two 2D torus networks running in opposite directions for machine learning workloads. The device will offer 1 INT8 POPS of compute throughput (approximately three times performance uplift compared to its predecessor), eight channels of GDDR6 memory, 1200 Gb/s Ethernet connectivity, and PCIe Gen5 lanes.  

In addition, the company is looking forward to adding a 2TB/s die-to-die interface for dual-chip solutions as well as for future use. This chip will be implemented on a 6nm-class fabrication process (we would expect it to be TSMC N6, but Tenstorrent has not confirmed this), yet at 600mm^2, it will be smaller than its predecessors produced on TSMC's 12nm-class node. One thing to remember is that Tenstorrent has not taped out its Blackhole yet, and its final feature set may differ from what the company discloses today. 

Next year the company will release its ultimate product: a multi-chiplet solution called Grendel that features its own Ascalon general-purpose cores featuring its own RISC-V microarchitecture with eight-wider decoding as well as a Tensix-based chiplet for ML workloads.  

Grendel is Tenstorrent's ultimate product set to be released next year: the multi-chiplet solution comprises an Aegis chiplet featuring high-performance Ascalon general-purpose cores and a chiplet or chiplets with Tensix cores for ML workloads. Depending on business requirements (and the financial capabilities of the company), Tenstorrent may implement an AI chiplet using a 3nm-class process technology and therefore take advantage of higher transistor density and Tensix core count, or it can keep using Black Hole chiplet for AI workloads (and even assign some work to 24 SiFive X280 cores, the company says). The chiplets will communicate with each other using the aforementioned 2TB/s interconnect.   

The Aegis chiplet with 128 general-purpose RISC-V eight-wide Ascalon cores organized in four 32-core clusters with inter-cluster coherency will be made using a 3nm-class process technology. In fact, the Aegis CPU chiplet will be among the first to use a 3nm-class fabrication process, something that will probably put the company on the map when it comes to high-performance CPU designs. 

Meanwhile, Grendel will use an LPDDR5 memory subsystem, PCIe, and Ethernet connectivity, so it will offer tangibly higher inference and training performance than existing solutions from the company. Speaking of Tensix cores, it is necessary to note that while all of Tenstorrent's AI cores are called Tensix, these cores actually evolve.

"The [Tensix] changes are evolutionary, but they are definitely there," explained Ljubisa Bajic, the company's founder. "[They add] new data formats, change ratios of FLOPS/SRAM capacity, SRAM bandwidth, network-on-chip bandwidth, new sparsity features, and features in general."

It is interesting to note that different Tenstorrent slides mention different memory subsystems for Black Hole and Grendel products. This is because the company is always looking at the most efficient memory technology and because it licenses DRAM controllers and physical interfaces (PHY). Therefore it has some flexibility when choosing the exact type of memory. In fact, Lien says that Tenstorrent is also developing its own memory controllers for future products, but for 2023 ~ 2024 solutions, it intends to use third-party MCs and PHYs. Meanwhile, for now, Tenstorrent does not plan to use any exotic memory, such as HBM, due to cost concerns. 

# Business Model: Selling Solutions and Licensing IP
While Tenstorrent has five different CPU IPs (albeit based on the same microarchitecture), it only has AI/ML products in the pipeline (if fully configured servers are not taken into account) that use either SiFive's X280 or Tenstorrent's eight-wide Ascalon CPU cores. Thus, it is reasonable to ask why it needs so many CPU core implementations.  

The short answer to this question is that Tenstorrent has a unique business model that includes IP licensing (in RTL, hard macro, or even GDS forms), selling chiplets, selling add-in ML accelerator cards or ML solutions featuring CPU and ML chiplets, and selling fully configured servers containing these cards.  

Companies building their own SoCs can license RISC-V cores developed by Tenstorrent, and a broad portfolio of CPU IPs allows the company to compete for solutions requiring different levels of performance and power.  

Server vendors can build their machines withTenstorrent's Grayskull and Wormhole accelerator cards or Blackhole and Grendel ML processors. Meanwhile, those entities that do not want to build hardware can just buy pre-built Tenstorrent servers and deploy them. 

Such a business model looks somewhat controversial since, in many cases, Tenstorrent competes and will compete against its own customers. Yet, at the end of the day, Nvidia offers both add-in cards and pre-built servers based on these boards, and it doesn't look like companies like Dell or HPE are too worried about this because they offer solutions for specific customers, not just building blocks.

# Summary
Tenstorrent jumped onto the radar about two years ago with the hire of Jim Keller. In two years, the company recruited a host of top engineers who are developing high-performance RISC-V cores for data center-grade AI/ML solutions as well as systems. Among the development team's achievements is the world's first eight-wide RISC-V general-purpose CPU core, as well as an appropriate system hardware architecture that can be used for AI as well as HPC applications. 

The company has a comprehensive roadmap that includes both high-performance RISC-V-based CPU chiplets as well as advanced AI accelerator chiplets, which promise to enable capable solutions for machine learning. Keeping in mind that AI and HPC are major megatrends poised for explosive growth, offering AI accelerators and high-performance CPU cores seems like a very flexible business model. 

Both AI and HPC markets are highly competitive, so getting some of the world's best engineers onboard is a must when you want to compete against the likes of established rivals (AMD, Intel, Nvidia) and emerging players (Cerebras, Graphcore). Like large chip developers, Tenstorrent has its own general-purpose CPU and AI/ML accelerator hardware, which is a unique advantage. Meanwhile, since the company uses RISC-V ISA, there are markets and workloads that it cannot address for now, at least as far as CPUs are concerned. 
