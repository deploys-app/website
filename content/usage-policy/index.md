---
layout: single
title: Usage Policy
header: Usage Policy
---

Moon Rhythm Co., Ltd. operates Deploys.app, a Kubernetes-based platform-as-a-service. This Usage Policy (the "Policy") explains what you may and may not do when you use Deploys.app. On Deploys.app you deploy and run containerized workloads (HTTP web services, background workers, scheduled jobs, internal TCP services), host static websites, push images to our private registry, attach custom domains and CDN, use persistent disks and secrets, and automate everything through service accounts and API keys. Because those workloads run on shared infrastructure, serve the public internet, and can make arbitrary outbound network connections, what one customer runs affects other customers, third parties, and us — abuse can blocklist our IP ranges, expose us to liability under Thai law, and degrade service for everyone else.

This Policy draws its lines around intent and harm. We want legitimate developers to run real applications and the tooling that supports them — including security tools, crawlers, and proxies — and we ask only that you not turn the platform against others. It is an acceptable use policy: it supplements, but does not replace, our Terms of Service (where published) and our [Privacy Policy](/privacy-policy), which are separate documents and govern where they apply. Where this Policy refers to personal-data practices, our Privacy Policy controls our own processing.

A note on how to read this Policy: most rules below turn on whether a workload is built to harm others, not on banning whole classes of ordinary development. Where a limit is expressed in relative terms ("large-scale", "high-volume", "disproportionate", "unrelated"), we apply it by reference to your documented per-project resource quotas, per-API rate quotas, fair-use limits, measurable reputation signals, and third-party complaints — and we will tell you the specific basis on request.

### Scope and Acceptance

This Policy applies to everyone who accesses or uses Deploys.app: account holders, project owners and members, billing-account owners, and any automated service accounts, API keys, or agents acting on your behalf. By creating an account, deploying a workload, pushing an image, attaching a domain, or otherwise using the service, you accept this Policy and are responsible for ensuring that everyone and everything operating under your account, your projects, or your credentials complies with it. A violation by anyone acting under your account or through your deployments — including your own end users — is treated as a violation by you.

You must be at least 20 years old (the threshold used in our Privacy Policy), or have verified parental or guardian consent, and you must have the legal capacity to enter a binding agreement. If you accept on behalf of an organization, you represent that you are authorized to bind it, and "you" refers to both you and that organization.

You must provide and keep current true, complete account, identity, and contact information, including a reachable email on file so we can reach you about billing, security, and abuse. Do not impersonate others, register under false pretenses, or use throwaway identities to evade a prior suspension.

Nothing in this Policy permits conduct that is unlawful under Thai law or any other law that applies to you, your end users, or the regions your service reaches, even where this Policy does not name it specifically.

### What You Can Do

Deploys.app is a general-purpose PaaS built for legitimate application hosting. You may use every feature for any lawful purpose, in good faith, within your quotas and fair-use limits, and in a way that does not harm other tenants, our infrastructure, or third parties. In particular, you may:

- Deploy web services, background workers, scheduled jobs, and internal TCP services.
- Host static sites and assets, attach custom domains, and serve through our CDN and routing.
- Push and pull your own images via registry.deploys.app, attach persistent disks, and store secrets.
- Automate deploys and operations with service accounts, API keys, and scoped tokens.
- Make the outbound network connections your app genuinely needs — call APIs, databases, webhooks, and third-party services.
- Run a private VPN or WireGuard endpoint for your own apps, and operate good-faith privacy infrastructure such as a Tor relay or bridge, provided it is not used to relay abuse (see "Anonymizing relays" below).
- Run unusual but legitimate workloads, including security tooling, crawlers, and proxies, **against systems you own or are explicitly authorized to use**.

The rule of thumb is simple: build and run your own things. The line we draw is **intent and harm** — workloads built to attack, defraud, deceive, or freeload off others are prohibited, even when the underlying tool is otherwise ordinary. Everything below describes what falls outside permitted use.

### Prohibited Activities

These categories are not exhaustive. We focus on what a workload is **for** and who it **harms**, not on banning whole classes of normal development. You may not use the platform, or allow it to be used, for any of the following.

#### Cryptocurrency mining and proof-of-work

Do not run cryptocurrency mining, coin minting, or other proof-of-work or proof-of-stake hashing workloads, whether run openly or hidden covertly inside an otherwise legitimate app, build step, or service account. Mining converts our compute and electricity into your profit, starves co-tenant workloads, and frequently rides in on stolen credentials or free-tier and promotional credits. This includes deploying miners (such as xmrig or ccminer) as workers or jobs, concealing a mining payload inside a web service's idle cycles or a static-site build step, and spreading a hashing workload across many projects, accounts, or trial credits.

#### Unauthorized blockchain nodes and RPC-for-hire

Do not operate cryptocurrency or blockchain infrastructure — full nodes, archive nodes, validators, relay or sequencer nodes, or public/commercial RPC endpoints — whose chain-sync, peer, and request traffic drives heavy egress or storage out of proportion to your quotas and fair-use limits, or which you offer to third parties as a node-for-hire service. Running a small node bounded to your own application's needs is fine; turning the platform into bandwidth- and storage-intensive blockchain infrastructure for others is not.

#### Denial-of-service, amplification, and network attacks

Do not originate, participate in, or provide infrastructure for denial-of-service (DoS/DDoS), reflection, or amplification attacks against any system, ours or a third party's. This includes flooding a target with SYN, UDP, ICMP, or HTTP traffic; operating DNS, NTP, memcached, or other reflectors that bounce spoofed traffic at victims; running booter/stresser attack-for-hire infrastructure; and cron jobs or workers engineered to hammer a third-party service to exhaust its capacity.

#### Scanning, reconnaissance, and unauthorized probing

Do not scan, probe, fingerprint, or enumerate networks, ports, or services you do not own or have explicit written authorization to test. This includes internet-wide nmap/masscan/zmap sweeps; brute-force or credential-stuffing probes against external SSH, RDP, or admin endpoints; mass crawling to find vulnerable hosts or exposed data stores; and unauthorized fuzzing or exploit-probing of third-party APIs and apps.

#### Malware, ransomware, exploit kits, and botnet C2

Do not host, distribute, develop, control, or operate malicious software, ransomware, exploit kits, rootkits, credential stealers, or botnets. This includes running command-and-control (C2) panels as web services, workers, or TCP services; serving malware, ransomware payloads, exploit kits, or drive-by exploit pages from deployments, static sites, or custom domains; pushing malicious or trojanized images to registry.deploys.app; and participating in a botnet as a bot, node, or relay. Confirmed malicious infrastructure is suspended on detection, without prior notice, because every hour it runs causes ongoing harm. Bona fide security research is permitted only under the safe harbour described under "Attacks on Deploys.app itself", or against systems you own or are explicitly authorized in writing to test, and never against our platform or other tenants.

#### Surveillance, stalkerware, and unlawful interception

Do not develop, host, or operate software designed to covertly monitor, track, or intercept a person, device, or communications without the subject's knowledge and lawful consent — including stalkerware and "spouseware", covert location or activity trackers, keyloggers aimed at third parties, and tools for unlawful interception of traffic or communications. Unauthorized interception is an offense under the Computer Crime Act; lawful, consented monitoring of your own systems and users is not affected.

#### Anonymizing relays and traffic laundering

The operative rule is harm: do not operate any relay whose purpose or effect is to launder, conceal, or relay abusive or illegal traffic, or to disguise the true origin of attacks, fraud, credential stuffing, or scraping — making our clean IPs the apparent source of third-party abuse. Examples of what this prohibits when used that way include open proxies, residential-proxy nodes, and anonymizing relays operated as a service for unrelated third parties. A private VPN or WireGuard endpoint for your own apps is fine, and a good-faith Tor relay or bridge is permitted; however, **public Tor exit nodes are not allowed**, because exit traffic routinely attracts abuse complaints and blocklisting that degrade the shared IP reputation every tenant depends on.

#### Spam, open mail relays, and unauthorized messaging

Do not send, relay, or host infrastructure for spam or unsolicited bulk or commercial messaging across any channel (email, SMS, chat, push, comments, social). Do not run open mail relays or bulk/transactional email infrastructure that sends on behalf of arbitrary, unverified, forged, or spoofed senders; mail purchased, scraped, harvested, or rented lists; ignore unsubscribe or opt-out requests; run comment-spam or form-spam bots; or host spam landing pages, doorway pages, SEO link farms, or phishing kits. Do not circumvent our invite-only email feature by running your own outbound SMTP to send unsolicited mail. Mail and messaging abuse blocklists our domains and IPs across the ecosystem and breaks deliverability for every tenant.

#### Telephony and VoIP fraud

Do not operate telephony or VoIP abuse infrastructure, including SIM-box and toll-fraud setups, wangiri (one-ring) callback fraud, robocall or robotext gateways, call-flooding or TDoS infrastructure, and bulk auto-dialing or auto-texting to recipients who have not consented. Legitimate, consented voice or messaging features of your own application are not affected.

#### Phishing, fraud, and deceptive services

Do not operate phishing pages, credential-harvesting forms, fake login portals, or other fraudulent or deceptive services. This includes sites impersonating banks, payment providers, well-known brands, or the Deploys.app/Moon Rhythm login itself; advance-fee, fake-shop, and investment-scam sites; and business-email-compromise (BEC) or spoofed-invoice infrastructure.

#### Bulk account creation and sybil farms

Do not create accounts, projects, or service-account identities in bulk by automation in order to abuse the platform or third parties — for example to multiply free-tier or trial allowances, evade a suspension, distribute an abusive workload across many identities to dodge quotas or attribution, or run sybil/fake-identity farms (fake signups, votes, reviews, engagement, or referrals) against third-party services. Provisioning the accounts and credentials your own organization legitimately needs is fine.

#### Generative-AI and synthetic-media abuse

Do not use the platform to build, host, or operate tooling whose purpose or primary effect is large-scale automated abuse using generated or synthetic media, including non-consensual sexual deepfakes or other non-consensual intimate imagery; voice-clone or face-swap fraud and impersonation; mass-produced disinformation, fake personas, or astroturfing campaigns; and any tooling that generates, transforms, or assists in producing child sexual abuse material (which is also covered, with zero tolerance, under "Prohibited and Illegal Content"). Building legitimate AI applications is fully permitted; weaponizing synthetic media against real people is not.

#### Workloads built to attack, defraud, or harm others

Do not deploy any workload whose purpose or primary effect is to attack, compromise, defraud, or harm third-party systems, networks, accounts, or people. This umbrella covers offensive tooling not named above: credential-stuffing, account-takeover, and password-cracking services; click-fraud, ad-fraud, invalid-traffic, fake-engagement, scalping, and inventory bots; carding, fraud-automation, and stolen-data pipelines; and scraping that is unlawful, that the target has formally objected to, or that generates abuse complaints against us. Because you run arbitrary code with arbitrary outbound connectivity, we reserve the right to act on any workload built to harm others even where it does not fit a named subcategory.

#### Abuse of outbound connectivity and egress

The destination, volume, and intent of your outbound traffic are governed by this Policy, not just what you expose inbound. Do not use a deployment's egress to exfiltrate or relay stolen or unlawfully obtained data to evade attribution, generate high-volume traffic engineered to inflate egress or attack a downstream service, make our IP addresses the apparent source of abuse so complaints and blocks land on us, or pivot into networks you have no authorization to reach.

#### Attacks on Deploys.app itself

Customers run untrusted code on shared Kubernetes infrastructure, so attacks on the platform directly threaten every other tenant. Without our prior written authorization, do not probe, scan, fuzz, load-test, or penetration-test Deploys.app's own infrastructure, isolation, or controls, attempt to breach or degrade them, or reverse-engineer them in order to defeat security, isolation, billing, or quota enforcement. This includes attempting container escape, privilege escalation, or breaking namespace/tenant isolation; stress- or load-testing our control plane, API, console, registry, static gateway, or edge to find breaking points; probing or attacking our internal services, metadata endpoints, or other tenants' workloads, projects, disks, or data; and attacking the access gate, authentication, or quota enforcement to bypass platform controls. Ordinary integration work — observing documented API behavior, reading error messages, and inferring how the platform works — is not "reverse-engineering" under this section.

**Security-research safe harbour.** We welcome good-faith vulnerability research and will not pursue legal action against you for testing that stays within this safe harbour: you test only your own resources or with our prior written authorization; you do not access, modify, exfiltrate, or destroy other tenants' or our own data; you do not degrade or disrupt the service (no DoS, no destructive testing); you stop and report promptly once you identify a likely vulnerability; and you report it privately to the contact below and give us reasonable time to remediate before any disclosure. Unauthorized active testing against our systems is not a substitute for responsible disclosure.

### Prohibited and Illegal Content

You are responsible for holding the rights to everything you deploy, and for everything you host, serve, store, transmit, or link to. You may not host, serve, store, transmit, link to, or facilitate content or activity that is unlawful under Thai law or the law of any jurisdiction your service reaches, or that this Policy otherwise prohibits. Some categories are clearly criminal on their face — CSAM, active attacks, and confirmed malware — and are actioned without waiting for a complaint; the remaining categories below are inherently more contestable and are generally actioned on credible notice or detection.

#### Child sexual abuse material (CSAM) — zero tolerance

Never upload, host, store, distribute, link to, generate, transform, or solicit any content that sexually exploits or endangers a child, on any surface — object storage, static sites, deployments, workers, or registry images. CSAM is criminal under Thai and international law. This prohibition is absolute and requires no prior notice or complaint: detection triggers immediate termination, preservation of relevant data, and proactive reporting to the competent Thai authorities (and, where applicable, organizations such as the National Center for Missing & Exploited Children (NCMEC)), regardless of any claimed intent, artistic, or "fair use" justification.

#### Clearly illegal content and activity

Do not host, transmit, or facilitate content or activity that is illegal on its face, including marketplaces for illegal drugs, weapons, or other contraband; content facilitating human trafficking; unlicensed gambling where prohibited; forged government or identity documents; and content promoting, coordinating, or providing material support to terrorism or violent extremism.

#### Hateful, violent, and extremist content

Do not host content inciting imminent violence against a person or group, terrorist recruitment or propaganda, attack-planning materials, instructions for building weapons intended to harm others, glorification of mass-casualty attacks to radicalize, or unlawful hate speech and incitement. Clear incitement and terrorist content cause direct, sometimes irreversible, real-world harm and are actioned promptly; we cooperate with lawful authority requests.

#### Intellectual property, counterfeiting, and piracy

Do not host, stream, or distribute content that infringes copyright, trademark, patent, or other intellectual-property rights, or enable others to do so — pirate streaming, warez, cracked software, key generators or license-bypass tools, unlicensed media, another party's assets (code, images, fonts, video) used without a license, or container images that bundle pirated or unlicensed proprietary software. Do not sell, advertise, or facilitate counterfeit goods, use another party's trademarks to deceive, operate counterfeit storefronts, typosquat custom domains to impersonate a brand, or pass off another company's service as your own. This is a takedown-on-notice category: we act on valid, good-faith complaints, and repeat infringers may be suspended.

#### Defamation, harassment, and threats

Do not publish content that is defamatory or libelous, or that constitutes unlawful harassment, doxxing to facilitate harassment, direct threats of violence against identifiable persons or groups, or coordinated harassment campaigns. Defamation is both a civil and a criminal matter under Thai law. We are not the arbiter of every dispute and act on credible, specific complaints, but content that is clearly unlawful may be removed.

#### Adult content and obscenity

Distribution of pornographic or obscene material is restricted under Thai law, so adult content carries legal exposure for us even where you believe it is lawful elsewhere. Do not host pornographic or obscene material where it is unlawful under applicable Thai law, and never host non-consensual intimate imagery ("revenge porn"). Ambiguous adult content is handled on notice with regard to applicable law. Any sexual content involving minors is governed by the zero-tolerance CSAM prohibition above.

#### Computer Crime Act offenses and Thailand-specific restrictions

As a Thailand-registered operator, Moon Rhythm is bound by the Computer Crime Act B.E. 2550 (and amendments). Do not use the platform to commit offenses under that Act, including unauthorized access to systems or data; unlawful interception of data; data or system interference, defacement, or tampering; or entering or disseminating false data that causes damage to the public, the economy, or national security — or to host tooling whose primary purpose is to commit such offenses against others. Certain categories carry specific legal restrictions in Thailand, including content unlawful with respect to the monarchy (lèse-majesté provisions) and national security, and any material subject to a valid Thai court or regulator takedown or blocking order. Content unlawful under applicable Thai statutes in these areas may be removed and, where required by law or by a court or agency order, reported or blocked. The Computer Crime Act also imposes service-provider duties on us, including cooperating with lawful orders and retaining traffic/computer-usage logs (historically around 90 days); the cooperation, takedown, and log-preservation obligations in this Policy reflect those duties, not merely contract.

#### Export controls, sanctions, and regulated data

Do not use the platform in violation of applicable export-control or economic-sanctions laws, provide service to sanctioned or denied parties or embargoed destinations where prohibited, re-export controlled software or technical data unlawfully, or deploy workloads that facilitate evasion of trade sanctions. You are responsible for ensuring your use, your end users, and the regions you serve are lawful, and we may suspend access to comply with binding sanctions or export-control obligations.

### Feature-Specific Rules

These platform capabilities are powerful primitives with specific risks. The general prohibitions above apply to all of them; the points below call out misuse particular to each feature.

**Private container registry (registry.deploys.app).** Use the registry for images you actually run on Deploys.app — that is, images pulled by a deployment in your account. Do not push pirated, cracked, infringing, or unlicensed images; images bundling malware, cryptominers, ransomware, rootkits, credential stealers, or C2 payloads; or images that no deployment in your account uses and that you are storing only to distribute elsewhere — the registry is not a public distribution point for warez or malware. Caching your own base images and storing your own CI build artifacts is fine. Do not warehouse stolen credential dumps, leaked databases, or other unlawfully obtained data as image layers or artifacts.

**Custom domains, routing, host-header override, and CDN.** Attach or route only domains you own or are authorized to use, and do not configure DNS or routes to hijack another party's domain or subdomain. Do not point a custom domain at our edge to serve phishing or brand-impersonation pages; use path-based routing, external upstreams, host-header override, or domain fronting to proxy or launder traffic, disguise its origin (to evade filtering, sanctions, or detection), or spoof or attack third-party origins; or hotlink, proxy, or mirror another site's assets through our CDN to offload their bandwidth onto our edge. Do not use cache-busting or bandwidth-amplification patterns to inflate egress or attack origins.

**Persistent disks and static/asset storage.** Disks, static hosting, and registry storage exist to support running applications, not as bulk storage or file-distribution lockers. Do not store, seed, or distribute pirated or infringing media or software; operate public or semi-public file-dump, paste, or warez download services unrelated to an app you run; mirror datasets, personal backups, or bulk archives well beyond your quotas and fair-use limits and unrelated to a deployment, in order to use the platform as cheap storage; or host any content this Policy prohibits (including CSAM) on disks or in static storage.

**Invite-only email feature.** Email is invite-only precisely because mail abuse is high-risk and damages sending reputation for all tenants. Send only to recipients who have consented or for whom you have another lawful basis, and honor unsubscribe and opt-out requests promptly. Do not send spam or unsolicited bulk/commercial email; spoof or forge sender identity, headers, or domains; mail purchased, scraped, harvested, or rented lists; send phishing or deceptive messages; relay mail for arbitrary, unverified, or unrelated third parties; or operate an open relay. Sending transactional or notification mail to your own verified end users is fine; sending at a volume or pattern that measurably harms deliverability or sending reputation for other tenants is not.

**Service accounts, API keys, and scoped tokens.** These are non-human identities used by automation and agents, and all activity under them is attributed to and billed to you. Keep them secret, scope them to least privilege (prefer per-user or per-agent tokens over one shared privileged token), and rotate or revoke them promptly when access should end. Do not share or transfer a single credential across unrelated parties, customers, or organizations; commit keys, pull secrets, or tokens to public repositories, images, or logs; use leaked or stolen credentials (yours or anyone's); continue using a credential you know is compromised; or drive automated requests in a way that breaches the documented per-API hourly and daily rate quotas, evades those quotas, or degrades the service for others.

**TCP services and other workloads.** Internal TCP services, web services, workers, and jobs all execute arbitrary code with outbound connectivity. Do not use any of them as flood sources, reflectors, scanners, brute-force or credential-stuffing tools, miners, distributed password crackers, abusive anonymizing relays, or C2/relay nodes; to deliver malware, phishing, or exploits; or to attempt container escape, privilege escalation, cluster exploitation, or access to other tenants' data.

**Reselling and white-labeling.** Running your own application that serves your own end users is permitted. Do not resell, rent, sublicense, white-label, or rebrand Deploys.app — its compute, storage, control plane, API, or registry — to unrelated third parties, or operate it as a shared multi-tenant service that obscures who is actually using the platform, without our written agreement.

### Fair Use and Billing Integrity

The platform is multi-tenant: one customer over-consuming or gaming the controls harms everyone. You may not consume compute, memory, disk, network, or other shared resources in a way that degrades service for other tenants, breaches or evades quotas or rate limits, or is otherwise abusive. The platform enforces per-project resource quotas, per-API hourly and daily rate quotas, pay-as-you-go billing in Thai Baht (THB), and free-tier allowances; "disproportionate", "high-volume", and similar terms below are measured against those documented limits and comparative tenant load. In particular, do not:

- Deliberately exhaust shared capacity through fork bombs, memory balloons, disk-filling workloads, or runaway autoscaling that starves co-tenants on a node.
- Circumvent quotas, rate limits, metering, or accounting — for example by sharding a single workload across many projects, billing accounts, or service-account keys, or by scripting around rate quotas or storage accounting.
- Abuse free-tier allowances, trial credits, or promotional offers through multi-accounting, automation, or other circumvention designed to obtain benefits beyond their intended scope.
- Use valid, authorized payment methods and pay all charges you incur — and do not commit chargeback fraud, dispute legitimate charges in bad faith, use stolen or unauthorized payment instruments, or run up usage and abandon the account to avoid payment.
- Hoard resources solely to reserve shared capacity. We may reclaim resources that are genuinely abandoned — for example, those on a non-paying, suspended, or long-dormant account — with notice where practicable. We do not reclaim your reserved domains or routes, registry images, or attached disks while your account is in good standing and your charges are paid; you remain responsible for right-sizing and decommissioning resources you no longer need.

### Your Responsibility for Your Apps, Content, and End Users

We provide infrastructure only. You choose what to run, and you are solely responsible for all code, container images, configuration, and content you deploy or process. We do not review, monitor, endorse, or assume liability for your workloads or content. If you deploy a vulnerable third-party image, securing and patching it is your responsibility; if your static site or app serves unlawful or infringing content, you — not Moon Rhythm — are accountable for it.

**Keep your deployments secure.** We expect you to follow good security practice: keep your images, dependencies, and base images reasonably current and patched — especially on internet-facing services — and avoid running known-exploited or end-of-life software in production. Do not expose admin interfaces, databases, or debug endpoints without authentication, or hardcode secrets in public images, logs, or static assets. We will not flag you simply because a new CVE exists, but we may require action — and may suspend a workload — when an unpatched or compromised deployment is actually being exploited, sending spam, hosting malware, or proxying attacks from our infrastructure. Act promptly on any evidence that a deployment has been compromised or defaced. You are responsible for safeguarding your account credentials, API keys, tokens, and stored secrets, and for all activity occurring under them.

**Maintain your own backups.** Persistent disks, object storage, and the registry are operational resources, not a guaranteed backup service. Keep your own off-platform backups of business-critical data, code, and build artifacts, and design your application for resilience; do not rely on the platform as your sole copy. We are not responsible for data loss after deletion, suspension, or an incident where you held no independent backup.

**You are responsible for your end users.** Your apps are internet-facing and may serve content uploaded by your own users, with whom we have no relationship. You are responsible for what your apps serve and for the conduct of your end users and downstream customers. If you run a multi-tenant app of your own, you must bind your users to acceptable-use terms at least as protective as this Policy, moderate and police their conduct, give them a way to report illegal content you host for them, and act on abuse. Anything your end users may not do under this Policy, you must not allow them to do through your application, and you must maintain the ability to remove or disable unlawful, infringing, or otherwise prohibited content you host.

### Data Protection and Privacy Responsibilities

For personal data your workloads collect or process, **you are the data controller and Moon Rhythm acts only as your processor and infrastructure provider** — you determine the purposes and means of processing, and you may not shift controller obligations onto us or represent to your end users that we are accountable for their personal data. (For your own account data — billing, login, and contact information — Moon Rhythm is itself the controller, as described in our Privacy Policy. This processor role concerns only your end users' data.) This allocation applies under the Thai Personal Data Protection Act B.E. 2562 (PDPA), the GDPR where it applies, and similar laws. As controller, you must:

- Provide your end users with the required privacy notices and cookie/consent mechanisms, obtain valid consent or maintain another lawful basis for each category of data you process, and service their access, deletion, portability, and other rights requests yourself — we have no relationship with your end users and cannot do this for you.
- Not collect, store, or process other people's personal, financial, payment-card, health, biometric, or other sensitive or regulated data without a lawful basis and appropriate safeguards. Do not store full payment-card data without meeting PCI-DSS scope and controls, warehouse scraped personal data without a lawful basis, process special-category data without the heightened safeguards PDPA s.26 requires, or hoard leaked credential dumps or stolen personal data. Deploys.app is general-purpose PaaS, not a specialized compliance environment, and we have not agreed to act as a processor for special-category/sensitive personal data; do not route such data through the platform without a specific written agreement with us. Meeting your regulatory requirements (such as PCI-DSS, PDPA, GDPR, or sector-specific rules) is your responsibility.
- Enter into and comply with a Data Processing Agreement (DPA) where the law requires one before you route regulated personal data through the platform. Our infrastructure and third-party server providers operate outside Thailand, as noted in our Privacy Policy, so personal data you route through the platform will be processed outside Thailand; as controller you must account for that cross-border transfer in your own PDPA compliance and confirm the applicable transfer mechanism in the relevant agreement rather than assuming it. You may not impose data-processing terms on us by unilateral notice. Your own sub-processors (analytics, payment, email, and other vendors) remain yours to vet and disclose to your users. Request a DPA via contact@moonrhythm.io.
- Meet your own breach-notification obligations. As controller of your end users' data, you have PDPA obligations directly under the statute to notify the Office of the Personal Data Protection Committee (PDPC) and, where required, affected data subjects; the 72-hour figure in our Privacy Policy reflects our own obligations for the data we control, not a timeline imposed on you. Notify us without undue delay of any security incident or personal-data breach affecting your workloads, and coordinate with us on the infrastructure-level facts your regulator needs.

You must also ensure your overall use of the platform and the data you process complies with all laws that apply to you, including Thai law (the Computer Crime Act and PDPA) and any export-control or sanctions regime — you are best placed to know which laws apply to your specific workload and users.

### Cooperation, Takedown, and Incident Response

Because we host customer-controlled content and run customer-controlled workloads, we sometimes receive abuse reports, infringement notices, or legal demands that only you can act on. You must:

- Maintain the ability to remove or disable unlawful or infringing content you host, designate a contact able to receive and act on abuse complaints, and act promptly on valid takedown, complaint, or legal notices we forward — within the time any notice states or the law requires.
- Cooperate in good faith with our security, abuse, and legal investigations: provide the information we reasonably request, preserve logs or evidence we identify as relevant to an open investigation, take the remedial action we identify (for example, rotating credentials we flag as compromised), and not obstruct or interfere. Do not delete resources to destroy evidence while an investigation is open.

### Enforcement and Our Rights

This Policy is meaningful only because we reserve the right to act. To protect the platform, our other customers, third parties, and our own legal standing, we may, at our discretion and to the extent permitted by law — but with no obligation to monitor:

- **Investigate** suspected violations of this Policy or applicable law, including reviewing relevant logs, metadata, traffic, and configuration, and request information and remedial action from you.
- **Throttle, suspend, disable, or remove** a deployment, registry image, domain, route, service account, project, or account, and remove or disable content, images, or routes that violate this Policy or applicable law or that are subject to a valid takedown or legal request.
- **Terminate** accounts for repeated, severe, or unresolved violations, with forfeiture of associated resources where applicable.
- **Take immediate emergency action without prior notice** when abuse is severe or ongoing and threatens the platform, other customers, or third parties — including CSAM, confirmed malware or C2, phishing, active attack traffic, and security incidents. Where practicable we give notice; where the harm is severe or time-sensitive, we act first.
- **Preserve evidence and cooperate with authorities**, including reporting to and producing information for law enforcement and competent regulators where the law requires or permits, and the mandatory CSAM reporting described above.

How fast we move depends on severity. For clearly criminal or actively harmful abuse — CSAM, confirmed malware or C2, phishing, and active attack traffic — we act first and without prior notice. For inherently contestable categories — such as alleged defamation, ambiguous adult content, IP/counterfeit complaints, and most fair-use and resource issues — we generally give notice and a chance to remedy before suspending, and act on credible, specific notice or detection. On shared infrastructure the safety of other tenants comes first. You acknowledge that violating this Policy may result in any of the foregoing, that attempting to circumvent an enforcement action — for example by creating new accounts or identities to evade a suspension — is itself a violation, and that our decision not to enforce a provision in a particular case does not waive our right to enforce it later. Enforcement under this Policy is in addition to any remedy available under our Terms of Service (where published) or applicable law.

### Reporting Abuse

If you believe a workload, website, image, domain, or account on Deploys.app violates this Policy or applicable law — phishing, malware, CSAM, spam, attacks originating from the platform, infringing content, or anything else described here — or if you wish to submit a takedown, infringement, or other report, contact us at **contact@moonrhythm.io**. Please include the affected URL, domain, IP, or deployment identifier and enough detail for us to investigate, but no more of any actual abusive content than is needed to locate and assess it. We review the reports we receive and prioritize severe abuse such as CSAM, active attacks, and malware. Good-faith security vulnerability reports about the Deploys.app platform are welcome at the same address and are covered by the safe harbour above.

### Changes to this Policy

We may update this Policy from time to time as the platform, the threat landscape, and the law evolve. When we make material changes, we will update the "Last updated" date below and, where appropriate, provide additional notice. Your continued use of Deploys.app after a change takes effect means you accept the revised Policy. We encourage you to review this Policy periodically.

This Usage Policy was last updated and effective on 30th June 2026.

### Contact

If you have any questions about this Policy, or would like to report abuse or submit a takedown request, you can contact us using the following details:

Moon Rhythm Co., Ltd.
\
43 Kaeo Ngoen Thong 44, Chimphli, Taling Chan, Bangkok, 10170
\
contact@moonrhythm.io
