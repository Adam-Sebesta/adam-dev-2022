# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0.2"
    }
  }

  required_version = ">= 1.1.0"
  cloud {
    organization = "adamsebesta"
    workspaces {
      name = "adam-dev-2022"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = "eastus2"
  tags = {
    Environment = "Production"
  }
}
resource "azurerm_static_site" "swa" {
  name                = "swa-adam-sebesta-2022-eastus2"
  resource_group_name = var.resource_group_name
  location            = azurerm_resource_group.rg.location
}

resource "azurerm_static_site_custom_domain" "adamsebesta" {
  static_site_id  = azurerm_static_site.swa.id
  domain_name     = "adamsebesta.com"
  validation_type = "dns-txt-token"
}

