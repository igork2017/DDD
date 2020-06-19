using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Calendar.v3;
using Google.Apis.Calendar.v3.Data;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DDD.Calendar
{
    public class CalendarRepository
    {
        private CalendarService _service;
        public CalendarRepository(CalendarService service)
        {
            _service = service;
        }
        public void EventInsert(string name, DateTime start)
        {
            var e = new Event();
            e.Summary =name + "DDD event1";
            e.Description = "My DDD1";
            e.Start = new EventDateTime();
            e.Start.DateTime = new DateTime(2020, 06, 14, 11, 30, 00);
            e.End = new EventDateTime();
            e.End.DateTime= new DateTime(2020, 06, 14, 11, 45, 00);
            var reminder = new EventReminder();           
            reminder.Method = "popup";
            reminder.Minutes = 30;
            e.Reminders = new Event.RemindersData();
            e.Reminders.UseDefault = true;
            //e.Reminders.Overrides =new List<EventReminder> { reminder };
            _service.Events.Insert(e, "primary").Execute();

        }

        private void EventList()
        {

            // Define parameters of request.
            EventsResource.ListRequest request = _service.Events.List("primary");
            request.TimeMin = DateTime.Now;
            request.ShowDeleted = false;
            request.SingleEvents = true;
            request.MaxResults = 10;
            request.OrderBy = EventsResource.ListRequest.OrderByEnum.StartTime;

            // List events.
            Events events = request.Execute();
            Console.WriteLine("Upcoming events:");
            if (events.Items != null && events.Items.Count > 0)
            {
                foreach (var eventItem in events.Items)
                {
                    string when = eventItem.Start.DateTime.ToString();
                    if (String.IsNullOrEmpty(when))
                    {
                        when = eventItem.Start.Date;
                    }
                    Console.WriteLine("{0} ({1})", eventItem.Summary, when);
                }
            }
            else
            {
                Console.WriteLine("No upcoming events found.");
            }

        }
    }
}
