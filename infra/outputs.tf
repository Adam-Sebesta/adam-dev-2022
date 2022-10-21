output "resource_group_id" {
  value = azurerm_resource_group.rg.id
}

output "swa_api_key" {
  value = azurerm_static_site.swa.api_key
}