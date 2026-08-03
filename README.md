# Precision Residential Construction Website

A customer-facing website for a Geelong residential builder, covering services, completed projects, direct contact and structured quote enquiries.

| | |
| --- | --- |
| Status | Live client website |
| Role | Discovery, content structure, design, implementation, production launch and lead capture |
| Stack | HTML, CSS, JavaScript, n8n, Cloudflare Pages and Zoho Mail |
| Live site | [prconstruction.au](https://prconstruction.au/) |
| Project page | [smsystems.au/work/precision-residential-construction](https://smsystems.au/work/precision-residential-construction/) |

## Project brief

Precision Residential Construction needed a credible web presence that made its work easy to inspect and made contacting the builder straightforward on desktop and mobile.

The site leads with completed residential work, then moves through core services, a before-and-after transformation, recent projects and a quote form. Phone and email actions remain available throughout the page.

![Precision Residential Construction homepage](assets/website-homepage.png)

## Content and interaction design

### Services

Six service areas are presented in plain language: decking, framing, pergolas, renovations, cladding and exterior carpentry.

![Residential construction services](assets/website-services.png)

### Project presentation

The photography is organised around outcomes rather than a generic gallery. A before-and-after comparison shows the exterior change directly, while recent projects carry short contextual descriptions.

![Before and after exterior work](assets/website-before-after.png)

![Recent project gallery](assets/website-projects.png)

### Quote intake

The enquiry form captures the details needed for a useful first response:

- name and contact details;
- project suburb;
- service type;
- expected timeframe;
- preferred contact method;
- project description.

The form submits to a production n8n webhook. The workflow records the enquiry
and sends an internal notification through the configured business-email path.
A labelled commissioning enquiry reached the business owner and received a
direct reply.

![Structured quote enquiry](assets/website-quote-crm.png)

## Production delivery and QA

The live site was launched through Cloudflare Pages with the custom
`prconstruction.au` domain, DNS, SSL and canonical apex routing configured for
production. Zoho Mail DNS and email authentication support the business-email
and owner-notification path. The responsive implementation was checked across
desktop and mobile layouts, including navigation, project media, contact
actions and form controls.

The repository validator checks the document metadata, responsive viewport,
quote-form contract, required n8n webhook, referenced assets and image alt
text. The live commissioning test verifies the customer path beyond the static
page: the n8n-backed submission was accepted, recorded, delivered to the owner
and answered.

This evidence does not claim an automated follow-up sequence, a multi-stage CRM
pipeline, traffic, rankings, conversion improvement, revenue or ROI.

## Source snapshot

[`site/index.html`](site/index.html) and [`site/assets`](site/assets/) contain the deployed static site snapshot. Contact details and project photography are already public on the live client website and are included with permission.

No private correspondence, invoices, analytics exports or customer enquiry records are included.

## Repository contents

```text
site/       deployed static source snapshot
assets/     selected project screens
docs/       delivery and privacy notes
```

[Delivery notes](docs/delivery.md)
