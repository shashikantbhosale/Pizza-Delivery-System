using Pizza_Delivery_System.Data;
using Pizza_Delivery_System.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IPizzaHomeDataManager, PizzaHomeDataManager>();
builder.Services.AddScoped<IPizzaHomeService, PizzaHomeService>();
builder.Services.AddScoped<IOrderDataManager, OrderDataManager>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<IuserDataManager, UserDataManager>();
builder.Services.AddScoped<IUserService, UserService>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
