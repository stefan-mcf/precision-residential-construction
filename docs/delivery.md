# Delivery notes

## Information structure

The page follows a single customer journey:

1. establish the business and location;
2. show the construction services available;
3. present completed work and a direct before-and-after comparison;
4. offer phone, email and quote actions;
5. collect enough detail for a useful first conversation.

## Responsive behaviour

The static implementation adapts navigation, project media, service cards and form controls for smaller screens. Primary call and quote actions remain accessible without requiring a desktop layout.

## Enquiry handling

The quote form posts structured project details to the production n8n webhook
at `smsystems.app.n8n.cloud`. The workflow records the enquiry and sends an
internal notification through the configured Zoho Mail business-email path.
The submit state distinguishes an accepted request from a validation or
delivery error.
A labelled live commissioning enquiry reached the owner and received a reply.

The evidence does not support an automated customer reply, follow-up sequence,
or multi-stage CRM pipeline.

## Production launch

The site was deployed through Cloudflare Pages with the custom
`prconstruction.au` domain, DNS, SSL and canonical apex routing configured for
production. Domain registration and third-party service fees remain paid
directly by the client; this repository does not claim a documented transfer
of Cloudflare administrator credentials.

## Quality assurance

Desktop and mobile layouts were reviewed for responsive navigation, media,
contact actions and form controls. `npm run validate` checks the static page
metadata, viewport, form fields, production n8n endpoint, referenced assets and
image alternative text.

## Publication boundary

Only material already approved for the live website is present here. Operational messages, customer submissions, invoices and private client records remain outside the repository.
