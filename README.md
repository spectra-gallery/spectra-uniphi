# spectra-uniphi

This repository acts as a meta project for the **Uniphi Lab** ecosystem.  Each directory here is an empty folder that links to an external repository.  Running the submodule command will populate them with code.  For a high level view of how everything fits together see the [interactive repository map](docs/interactive-map.html).

## Repository structure

The following directories correspond to Git submodules:

- `exosystem/exosys-folg` – ecosystem modeling experiments.
- `afrhone/template` – UI prototyping templates from the `aligonde-ideo` repository.
- `spectra/infra` – infrastructure definitions for deployment.
- `spectra/ideotek` – smart‑contract logic.
- `spectra/graph` – social data graph implementation.
- `spectra/graph-api` – API service for the social graph.
- `spectra/afrhone` – application code for the Spectra project.
- `arquolab/delta` – sandbox models from the Arquolab team.

These submodules come from their respective GitHub repositories and are not included in this repository by default.

## Fetching submodules

After cloning this repository run the following command to download all required code:

```bash
git submodule update --init --recursive
```

This will pull down each external project into its directory so that the entire tree builds correctly.

## Intended architecture

The Uniphi Lab stack combines several services.  A `spectra-playground-server` provides backend capabilities while a `spectra-frontend` offers a web interface.  Supporting projects such as `spectra-infra` and the social graph repositories provide the foundation.  Together they form the environment visualized in the interactive map.

